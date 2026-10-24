"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCheck,
  Copy,
  Globe,
  AppWindow,
  Layers,
  Smartphone,
  Monitor,
  Sparkles,
  ShoppingBag,
  Cloud,
  PenTool,
  CircleHelp,
  Mail,
  MessageCircle,
} from "lucide-react";
import {
  platforms,
  stages,
  timelines,
  budgets,
  initialEnquiry,
  validateStep,
  buildBrief,
  handoffLinks,
  type Enquiry,
} from "@/lib/enquiry";

const icons = [
  Globe,
  AppWindow,
  Layers,
  Smartphone,
  Monitor,
  Sparkles,
  ShoppingBag,
  Cloud,
  PenTool,
  CircleHelp,
];
const stepTitles = [
  "What are you looking to build?",
  "Where are you in your journey?",
  "A little about timing & investment.",
  "Let’s put a name to the idea.",
];
const stepDescriptions = [
  "Choose everything that fits. It’s fine if you’re still figuring it out.",
  "Every good project starts somewhere. Choose the closest match.",
  "A rough direction is useful. You don’t need to have every answer.",
  "Share enough for a useful first conversation. No account needed.",
];
const stepNames = [
  "Platform needs",
  "Business stage",
  "Timeline & budget",
  "Your details",
];

export function EnquiryForm() {
  const [data, setData] = useState<Enquiry>({ ...initialEnquiry });
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [review, setReview] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const briefField = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const service = new URLSearchParams(window.location.search).get("service");
    if (service && service.length < 120)
      setData((d) => ({ ...d, description: `Interested in ${service}.\n\n` }));
  }, []);
  const set = <K extends keyof Enquiry>(key: K, value: Enquiry[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };
  function move(next: number) {
    setStep(next);
    setErrors({});
    requestAnimationFrame(() => heading.current?.focus());
  }
  function submit(e: FormEvent) {
    e.preventDefault();
    const found = validateStep(step, data);
    setErrors(found);
    if (Object.keys(found).length) {
      requestAnimationFrame(() =>
        document.getElementById(`error-${Object.keys(found)[0]}`)?.focus(),
      );
      return;
    }
    if (step < 3) move(step + 1);
    else {
      setReview(true);
      requestAnimationFrame(() => heading.current?.focus());
    }
  }
  const error = (key: string) =>
    errors[key] ? (
      <p role="alert" tabIndex={-1} id={`error-${key}`} className="field-error">
        {errors[key]}
      </p>
    ) : null;
  async function copy() {
    try {
      await navigator.clipboard.writeText(buildBrief(data));
      setCopyStatus("Project brief copied. Paste it into your preferred app.");
    } catch {
      briefField.current?.focus();
      briefField.current?.select();
      setCopyStatus(
        "Select the brief below and copy it with your keyboard or device menu.",
      );
    }
  }
  const links = handoffLinks(data);
  return (
    <div className="enquiry-layout">
      <aside className="enquiry-sidebar">
        <p className="eyebrow">A GOOD PLACE TO START</p>
        <h2>
          Big possibilities.
          <br />
          <em>Simple first steps.</em>
        </h2>
        <ol className="form-steps">
          {stepNames.map((name, i) => (
            <li
              key={name}
              className={i === step ? "current" : i < step ? "complete" : ""}
              aria-current={i === step ? "step" : undefined}
            >
              <span>
                {i < step ? (
                  <Check size={15} />
                ) : (
                  String(i + 1).padStart(2, "0")
                )}
              </span>
              <div>
                {name}
                <small>
                  {i < step
                    ? "Completed"
                    : i === step
                      ? "You are here"
                      : "Up next"}
                </small>
              </div>
            </li>
          ))}
        </ol>
        <div className="enquiry-side-note">
          <span className="location-dot small">Direct to Acenara</span>
          <p>
            Your brief stays in this browser until you choose an app and send
            it. We don’t submit it in the background.
          </p>
          <a href="mailto:zakhter843@gmail.com">
            Prefer email? Say hello <ArrowUpRight size={15} />
          </a>
        </div>
      </aside>
      <div className="form-panel">
        <p className="step-count">
          STEP {String(step + 1).padStart(2, "0")} / 04{" "}
          <span>{review ? "YOUR PROJECT BRIEF" : "LET’S MAKE IT CLEARER"}</span>
        </p>
        <div className="form-progress" aria-hidden="true">
          <span style={{ width: `${(step + 1) * 25}%` }} />
        </div>
        <h2 ref={heading} tabIndex={-1} className="form-heading">
          {review ? "Your idea. Ready for a conversation." : stepTitles[step]}
        </h2>
        <p className="form-description">
          {review
            ? "Review your brief, then open WhatsApp or your email app. You will need to press Send there to deliver it."
            : stepDescriptions[step]}
        </p>
        {review ? (
          <div className="review-panel">
            <dl className="review-summary">
              <div>
                <dt>Project</dt>
                <dd>{data.platforms.join(", ")}</dd>
              </div>
              <div>
                <dt>Stage</dt>
                <dd>{data.stage}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{data.timeline}</dd>
              </div>
              <div>
                <dt>Budget</dt>
                <dd>{data.budget}</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>
                  {data.name} · {data.email}
                </dd>
              </div>
            </dl>
            <details className="brief-details">
              <summary>Read or manually copy the full brief</summary>
              <textarea
                ref={briefField}
                value={buildBrief(data)}
                readOnly
                aria-label="Your complete project brief"
                rows={16}
              />
            </details>
            <div className="handoff-actions">
              <a
                className="button"
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                Open WhatsApp
                <ArrowUpRight size={17} />
              </a>
              <a className="button button-secondary" href={links.email}>
                <Mail size={18} />
                Open email app
                <ArrowUpRight size={17} />
              </a>
              <button className="text-button" onClick={copy}>
                <Copy size={17} />
                Copy project brief
              </button>
            </div>
            <p className="handoff-note">
              <CheckCheck size={18} />
              Your brief is prepared. It has not been sent yet. If an app won’t
              open, copy the brief and email zakhter843@gmail.com or message
              +923211514226.
            </p>
            <p className="small" role="status">
              {copyStatus}
            </p>
            <button
              className="text-button"
              onClick={() => {
                setReview(false);
                requestAnimationFrame(() => heading.current?.focus());
              }}
            >
              <ArrowLeft size={17} />
              Edit your details
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={submit}>
            {step === 0 && (
              <fieldset>
                <legend className="sr-only">
                  Select one or more platforms
                </legend>
                <div className="platform-options">
                  {platforms.map((p, i) => {
                    const Icon = icons[i];
                    return (
                      <label
                        key={p}
                        className={`option-card ${data.platforms.includes(p) ? "selected" : ""}`}
                      >
                        <input
                          type="checkbox"
                          name="platforms"
                          value={p}
                          checked={data.platforms.includes(p)}
                          onChange={() =>
                            set(
                              "platforms",
                              data.platforms.includes(p)
                                ? data.platforms.filter((x) => x !== p)
                                : [...data.platforms, p],
                            )
                          }
                          aria-describedby={
                            errors.platforms ? "error-platforms" : undefined
                          }
                        />
                        <Icon size={22} strokeWidth={1.5} />
                        <span>{p}</span>
                        <span className="option-check">
                          {data.platforms.includes(p) && <Check size={12} />}
                        </span>
                      </label>
                    );
                  })}
                </div>
                {error("platforms")}
              </fieldset>
            )}
            {step === 1 && (
              <fieldset>
                <legend className="sr-only">Your business stage</legend>
                <div className="stage-options">
                  {stages.map((p, i) => (
                    <label
                      key={p}
                      className={`option-card stage-option ${data.stage === p ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="stage"
                        value={p}
                        checked={data.stage === p}
                        onChange={() => set("stage", p)}
                        aria-describedby={
                          errors.stage ? "error-stage" : undefined
                        }
                      />
                      <span className="small">0{i + 1}</span>
                      <span>{p}</span>
                      <span className="option-check">
                        {data.stage === p && <Check size={12} />}
                      </span>
                    </label>
                  ))}
                </div>
                {error("stage")}
              </fieldset>
            )}
            {step === 2 && (
              <>
                <fieldset>
                  <legend>When would you like to get started?</legend>
                  <div className="pill-options">
                    {timelines.map((p) => (
                      <label
                        key={p}
                        className={data.timeline === p ? "selected" : ""}
                      >
                        <input
                          type="radio"
                          name="timeline"
                          checked={data.timeline === p}
                          onChange={() => set("timeline", p)}
                          value={p}
                          aria-describedby={
                            errors.timeline ? "error-timeline" : undefined
                          }
                        />
                        {p}
                      </label>
                    ))}
                  </div>
                  {error("timeline")}
                </fieldset>
                <fieldset className="budget-fieldset">
                  <legend>What investment do you have in mind?</legend>
                  <p className="small muted">
                    All amounts are in US dollars. These bands help us
                    understand scope; they are not a quote.
                  </p>
                  <div className="pill-options">
                    {budgets.map((p) => (
                      <label
                        key={p}
                        className={data.budget === p ? "selected" : ""}
                      >
                        <input
                          type="radio"
                          name="budget"
                          checked={data.budget === p}
                          onChange={() => set("budget", p)}
                          value={p}
                          aria-describedby={
                            errors.budget ? "error-budget" : undefined
                          }
                        />
                        {p}
                      </label>
                    ))}
                  </div>
                  {error("budget")}
                </fieldset>
              </>
            )}
            {step === 3 && (
              <div className="details-fields">
                <div className="field-row">
                  <label>
                    Full name <span aria-hidden="true">*</span>
                    <input
                      aria-label="Full name"
                      autoComplete="name"
                      required
                      value={data.name}
                      maxLength={120}
                      onChange={(e) => set("name", e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "error-name" : undefined}
                    />
                    {error("name")}
                  </label>
                  <label>
                    Email address <span aria-hidden="true">*</span>
                    <input
                      aria-label="Email address"
                      type="email"
                      autoComplete="email"
                      required
                      value={data.email}
                      maxLength={254}
                      onChange={(e) => set("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "error-email" : undefined
                      }
                    />
                    {error("email")}
                  </label>
                </div>
                <div className="field-row">
                  <label>
                    Company <span className="muted">(optional)</span>
                    <input
                      autoComplete="organization"
                      value={data.organization}
                      maxLength={200}
                      onChange={(e) => set("organization", e.target.value)}
                    />
                    {error("organization")}
                  </label>
                  <label>
                    WhatsApp or phone <span className="muted">(optional)</span>
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={data.phone}
                      maxLength={50}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                    {error("phone")}
                  </label>
                </div>
                <label>
                  Tell us about your project <span aria-hidden="true">*</span>
                  <textarea
                    aria-label="Tell us about your project"
                    required
                    value={data.description}
                    minLength={30}
                    maxLength={6000}
                    rows={5}
                    placeholder="What are you hoping to build or improve? Who will use it?"
                    onChange={(e) => set("description", e.target.value)}
                    aria-invalid={!!errors.description}
                    aria-describedby={
                      errors.description
                        ? "error-description"
                        : "description-hint"
                    }
                  />
                  <span id="description-hint" className="small muted">
                    30–6,000 characters. Please leave out sensitive information.
                  </span>
                  {error("description")}
                </label>
                <fieldset>
                  <legend>How would you prefer us to reply?</legend>
                  <div className="pill-options">
                    {["Email", "WhatsApp", "Either"].map((p) => (
                      <label
                        key={p}
                        className={data.preferred === p ? "selected" : ""}
                      >
                        <input
                          type="radio"
                          name="preferred"
                          value={p}
                          checked={data.preferred === p}
                          onChange={() => set("preferred", p)}
                        />
                        {p}
                      </label>
                    ))}
                  </div>
                  {error("preferred")}
                </fieldset>
                <label className="privacy-check">
                  <input
                    type="checkbox"
                    checked={data.privacy}
                    onChange={(e) => set("privacy", e.target.checked)}
                    required
                    aria-describedby={
                      errors.privacy ? "error-privacy" : undefined
                    }
                  />
                  <span>
                    I understand that I’ll send this brief through an external
                    app and that Acenara may use my details to respond.{" "}
                    <Link href="/privacy/" target="_blank">
                      Read the privacy policy.
                    </Link>
                  </span>
                </label>
                {error("privacy")}
              </div>
            )}
            <div className="form-controls">
              {step > 0 ? (
                <button
                  type="button"
                  className="text-button"
                  onClick={() => move(step - 1)}
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
              ) : (
                <span className="small muted">Choose one or more</span>
              )}
              <button type="submit" className="button">
                {step === 3 ? "Review project brief" : "Continue"}
                <ArrowRight size={17} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
