import Link from "next/link";
import { ArrowRight, MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import { WhatsAppIcon } from "./icons";
import { company } from "@/content/company";

export function Button({
  href,
  children,
  secondary = false,
  light = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : ""} ${light ? "button-light" : ""} ${className}`}
    >
      <span>{children}</span>
      <span className="button-icon">
        <ArrowRight size={18} aria-hidden="true" />
      </span>
    </Link>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
export function SectionHeading({
  label,
  title,
  text,
  children,
}: {
  label: string;
  title: ReactNode;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h2>{title}</h2>
      </div>
      <div className="section-heading-aside">
        {text && <p>{text}</p>}
        {children}
      </div>
    </div>
  );
}
export function PageIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: ReactNode;
  text: string;
}) {
  return (
    <section className="page-intro container">
      <div className="intro-text">
        <Eyebrow>{label}</Eyebrow>
        <h1>{title}</h1>
        <div className="intro-baseline">
          <p>{text}</p>
        </div>
      </div>
      <div className="intro-brand" aria-hidden="true">
        <div className="intro-brand-orbit" />
        <img src="/brand/icon-dark.svg" alt="" width="220" height="220" />
        <span>
          THINK CLEARLY.
          <br />
          BUILD WITH PURPOSE.
        </span>
      </div>
    </section>
  );
}
export function CTA() {
  return (
    <section className="cta-section cta-rich">
      <div className="container cta-inner">
        <div>
          <Eyebrow light>YOUR NEXT CHAPTER</Eyebrow>
          <h2>
            Ambitious idea?
            <br />
            <em>Let’s build it.</em>
          </h2>
          <p className="cta-main-description">
            Bring the opportunity, the challenge, or the sketch on a page. We’ll
            help you find a clear way forward.
          </p>
          <div className="cta-checks">
            <span>
              <CheckCircle2 size={15} />
              Direct conversation
            </span>
            <span>
              <CheckCircle2 size={15} />A considered next step
            </span>
          </div>
        </div>
        <div className="cta-conversation">
          <div className="cta-conversation-top">
            <span>
              <MessageCircle size={24} />
            </span>
            <div>
              <small>LET’S MAKE IT CONCRETE</small>
              <h3>Tell us what’s on your mind.</h3>
            </div>
          </div>
          <Button href="/contact/" light>
            Start a project
          </Button>
          <div className="cta-contact-links">
            <a href={`mailto:${company.email}`}>
              <Mail size={17} />
              Email the studio
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>
          <p>Lahore, Pakistan · Working internationally</p>
        </div>
      </div>
      <div className="cta-orbit" aria-hidden="true" />
    </section>
  );
}
