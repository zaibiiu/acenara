import Link from "next/link";
import { CollaborationPhoto } from "@/components/collaboration-photo";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers3,
  Cloud,
  ShieldCheck,
  Compass,
  Code2,
  Workflow,
  Sparkles,
  Globe2,
  ScanLine,
  Boxes,
  Lightbulb,
  Check,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";
import { Button, CTA, Eyebrow, SectionHeading } from "@/components/ui";
import { Reveal, Count } from "@/components/motion";
import { Visual } from "@/components/visual";
import { Art } from "@/components/art";
import { BookingDemo, DashboardDemo } from "@/components/demos";
import { ProcessJourney } from "@/components/process-journey";
import { PlatformExperience } from "@/components/platform-experience";
import { services } from "@/content/services";
import { solutions } from "@/content/studio";
import { experience } from "@/content/company";
import { articles, readingTime } from "@/content/insights";
import { metadata } from "@/lib/seo";
const serviceIcons = [Cpu, Layers3, Cloud, ShieldCheck];
export const generateMetadata = () =>
  metadata(
    "Acenara — Software for your next big move",
    "Acenara designs and engineers websites, applications, AI workflows, and connected business platforms. Based in Lahore. Built for international collaboration.",
  );

export default function Home() {
  return (
    <>
      <section className="home-hero hero-rich">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-label">
              <span />
              SOFTWARE. PRODUCTS. POSSIBILITIES.
            </div>
            <h1>
              Software for
              <br />
              your next
              <br />
              <em>big move.</em>
            </h1>
            <p>
              Bring the ambition. We’ll bring the product thinking, design, and
              engineering to turn it into software that works for your business.
            </p>
            <div className="hero-actions">
              <Button href="/contact/" light>
                Start a project
              </Button>
              <Button href="/solutions/" secondary>
                Explore solutions
              </Button>
            </div>
            <div className="hero-location">
              <Globe2 size={16} />
              <span>Lahore-based. International by design.</span>
            </div>
          </div>
          <Reveal className="hero-brand-composition">
            <div className="hero-art-frame">
              <img
                src="/images/brand-sculpture.webp"
                alt="Acenara’s signature ribbon A sculpture with an integrated coral sphere"
                width="1440"
                height="960"
                fetchPriority="high"
              />
              <div className="hero-art-top">
                <img src="/brand/icon.svg" width="24" height="24" alt="" />
                <span>FORM MEETS POSSIBILITY</span>
                <span className="hero-small-orbit" />
              </div>
            </div>
            <div className="hero-floating-tag hero-tag-top">
              <span className="feature-icon">
                <Lightbulb size={19} />
              </span>
              <div>
                <small>THE THINKING BEHIND THE BUILD</small>
                <strong>Clear vision. Connected expertise.</strong>
              </div>
              <CheckCircle2 size={17} />
            </div>
            <div className="hero-floating-tag hero-tag-bottom">
              <span className="hero-tag-number">
                A<span>+</span>
              </span>
              <div>
                <strong>
                  Designed to connect.
                  <br />
                  Engineered to move you forward.
                </strong>
                <span className="hero-tag-track">
                  <i />
                  Strategy
                  <span />
                  Design
                  <span />
                  Engineering
                </span>
              </div>
            </div>
            <div className="hero-orbit" aria-hidden="true" />
          </Reveal>
        </div>
        <div className="container hero-capability-strip">
          {[
            {
              icon: Layers3,
              title: "Digital products",
              text: "Web, mobile & SaaS",
            },
            {
              icon: Cpu,
              title: "Applied intelligence",
              text: "AI & workflow automation",
            },
            {
              icon: Cloud,
              title: "Connected foundations",
              text: "Cloud, data & integrations",
            },
            {
              icon: ShieldCheck,
              title: "Long-term thinking",
              text: "Security, growth & care",
            },
          ].map((v) => (
            <Link href="/services/" key={v.title}>
              <v.icon size={22} />
              <div>
                <strong>{v.title}</strong>
                <span>{v.text}</span>
              </div>
              <ArrowRight size={15} />
            </Link>
          ))}
        </div>
      </section>
      <section className="value-section">
        <div className="container value-grid">
          <div>
            <Eyebrow>A PARTNER FOR THE WHOLE PICTURE</Eyebrow>
            <h2>
              Your business is connected.
              <br />
              <em>Your software should be, too.</em>
            </h2>
          </div>
          <div>
            <p>
              A website is one touchpoint. Behind it are the products, people,
              data, and workflows that make a business run. We help bring those
              parts into a clearer, more useful whole.
            </p>
            <Link className="text-link" href="/about/">
              Get to know Acenara
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="human-home-section">
        <div className="container human-story">
          <CollaborationPhoto kind="collaboration" />
          <div className="human-story-copy">
            <Eyebrow>THINK TOGETHER. BUILD WITH PURPOSE.</Eyebrow>
            <h2>
              Better conversations.
              <br />
              <em>Better software.</em>
            </h2>
            <p>
              Good work happens when business context, design thinking, and
              engineering decisions meet. We make space for the questions that
              turn an ambitious idea into a useful product.
            </p>
            <Link className="text-link" href="/how-we-work/">
              See how we collaborate
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container" id="what-we-do">
        <SectionHeading
          label="CONNECTED EXPERTISE"
          title={
            <>
              Big-picture thinking.
              <br />
              <em>Hands-on capability.</em>
            </>
          }
          text="From the first product decision to the systems behind the screen. Explore four connected areas of expertise."
        >
          <Link className="text-link" href="/services/">
            All 42 capabilities
            <ArrowRight size={17} />
          </Link>
        </SectionHeading>
        <div className="service-showcase-grid">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${s.slug}/`}
                  className="service-showcase-card"
                >
                  <Visual kind={s.visual} compact />
                  <div className="service-showcase-body">
                    <div className="service-showcase-top">
                      <span className="feature-icon">
                        <Icon size={24} />
                      </span>
                      <span>
                        0{i + 1} / {s.offerings.length} CAPABILITIES
                      </span>
                      <span className="service-next">
                        <ArrowRight size={20} />
                      </span>
                    </div>
                    <h3>{s.short}</h3>
                    <p>{s.outcome}</p>
                    <div className="service-preview-tags">
                      {s.offerings.slice(0, 3).map((o) => (
                        <span key={o.id}>{o.name}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
      <section className="product-section">
        <div className="container product-layout">
          <div className="product-copy">
            <Eyebrow light>PRODUCT EXPERIENCES, RECONSIDERED</Eyebrow>
            <h2>
              Make the complex
              <br />
              feel <em>effortless.</em>
            </h2>
            <p>
              The best interaction is the one that makes sense. We connect the
              detail of a single screen to the full journey of the person using
              it.
            </p>
            <div className="product-feature-list">
              {[
                {
                  icon: Compass,
                  title: "Designed around a real task",
                  text: "Clear journeys, considered defaults, and useful next steps.",
                },
                {
                  icon: Smartphone,
                  title: "Consistent across touchpoints",
                  text: "Interfaces that feel connected on mobile, desktop, and everywhere in between.",
                },
                {
                  icon: Code2,
                  title: "Built for what follows",
                  text: "Maintainable foundations, thoughtful integrations, and room to evolve.",
                },
              ].map((v) => (
                <div key={v.title}>
                  <span>
                    <v.icon size={21} />
                  </span>
                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button href="/services/software-development/" light>
              Explore digital products
            </Button>
          </div>
          <div className="product-demo-stage">
            <span className="demo-stage-label">
              <ScanLine size={15} />
              INTERACTIVE PRODUCT STUDY
            </span>
            <BookingDemo />
            <span className="demo-stage-hint">
              Try selecting a date and time. This is an illustrative demo.
            </span>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="SOLUTIONS FOR THE WAY YOU WORK"
          title={
            <>
              A useful answer starts
              <br />
              with the <em>right problem.</em>
            </>
          }
          text="Choose a business challenge. We’ll connect the product, the workflow, and the engineering behind it."
        />
        <div className="solution-workspace">
          <div className="solution-workspace-copy">
            <div className="solution-heading-icon">
              <Boxes size={26} />
            </div>
            <h3>
              Built around
              <br />
              your business.
            </h3>
            <p>
              Connected workspaces. Clearer operations. Better customer
              journeys.
            </p>
            <div className="solution-mini-links">
              {solutions.slice(0, 4).map((s, i) => (
                <Link key={s.id} href={`/solutions/#${s.id}`}>
                  <span>0{i + 1}</span>
                  {s.title}
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
            <Link href="/solutions/" className="text-link">
              Explore all solutions
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="solution-dashboard">
            <DashboardDemo />
            <div className="dashboard-concept-note">
              <CheckCircle2 size={15} />
              Original product concept · Illustrative data
            </div>
          </div>
        </div>
      </section>
      <section className="experience-ribbon">
        <div className="container">
          <SectionHeading
            label="SELECTED EXPERIENCE"
            title={
              <>
                Different platforms.
                <br />
                <em>A broader perspective.</em>
              </>
            }
            text="Prior development experience brings context to new challenges, from rental operations and real estate to learning, client management, and AI."
          />
          <PlatformExperience compact />
          <div className="experience-sectors">
            {experience.map((e) => (
              <span key={e.name}>{e.name}</span>
            ))}
          </div>
          <div className="section-bottom-link">
            <Link className="text-link" href="/expertise/">
              Explore platforms & experience
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="why-section">
        <div className="container">
          <SectionHeading
            label="THE ACENARA APPROACH"
            title={
              <>
                Strong work.
                <br />
                <em>Clear reasons behind it.</em>
              </>
            }
            text="The quality of a product comes from the decisions behind it. Here’s what we bring to that conversation."
          />
          <div className="why-grid">
            {[
              {
                icon: Compass,
                number: "01",
                title: "Business context first",
                text: "Understand the operation before proposing a stack. Keep product decisions connected to the people and outcomes they serve.",
              },
              {
                icon: Layers3,
                number: "02",
                title: "Design and engineering together",
                text: "Resolve the experience and the technical trade-offs in the same conversation, so the product works as well as it looks.",
              },
              {
                icon: Workflow,
                number: "03",
                title: "Visible work. Shared direction.",
                text: "Agree the scope, show working progress, and make changes understandable. Good collaboration should make the next decision easier.",
              },
            ].map((v) => (
              <Reveal key={v.title}>
                <article className="why-card">
                  <div>
                    <span className="feature-icon">
                      <v.icon size={25} />
                    </span>
                    <span>{v.number}</span>
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="HOW WE WORK"
          title={
            <>
              Less guesswork.
              <br />
              <em>More forward motion.</em>
            </>
          }
          text="A considered process, from the first question to a useful release. Select a phase to see what happens next."
        >
          <Link className="text-link" href="/how-we-work/">
            Our delivery approach
            <ArrowRight size={16} />
          </Link>
        </SectionHeading>
        <ProcessJourney />
      </section>
      <section className="capability-numbers">
        <div className="container">
          <div>
            <Eyebrow light>THE BREADTH BEHIND THE WORK</Eyebrow>
            <h2>
              Connected expertise.
              <br />
              <em>One conversation.</em>
            </h2>
          </div>
          <div className="capability-counts">
            {[
              { value: 4, label: "Connected service areas" },
              { value: 42, label: "Defined capabilities" },
              { value: 6, label: "Delivery phases" },
              { value: 8, label: "Experience domains" },
            ].map((v) => (
              <div key={v.label}>
                <strong>
                  <Count value={v.value} />
                  <span> /</span>
                </strong>
                <p>{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container ai-rich-layout">
        <Visual kind="ai" />
        <div>
          <Eyebrow>INTELLIGENCE WITH A PURPOSE</Eyebrow>
          <h2>
            Useful AI.
            <br />
            <em>Real-world context.</em>
          </h2>
          <p>
            Start with the task, not the hype. We help you shape focused
            assistance and automation around the way your business actually
            operates.
          </p>
          <div className="ai-benefit-cards">
            <div>
              <Cpu size={23} />
              <h3>Assistance that fits</h3>
              <p>
                Knowledge workflows, document processing, and task-specific
                tools.
              </p>
            </div>
            <div>
              <Workflow size={23} />
              <h3>Connected by design</h3>
              <p>
                Integrations, review points, and clear boundaries around action.
              </p>
            </div>
          </div>
          <Button href="/services/ai-automation/">
            Explore AI & automation
          </Button>
        </div>
      </section>
      <section className="insights-rich-section">
        <div className="container">
          <SectionHeading
            label="FROM THE ACENARA JOURNAL"
            title={
              <>
                Ideas to build on.
                <br />
                <em>Perspectives worth keeping.</em>
              </>
            }
          >
            <Link className="text-link" href="/insights/">
              Explore all insights
              <ArrowRight size={17} />
            </Link>
          </SectionHeading>
          <div className="home-insights">
            {articles.slice(0, 3).map((a, i) => (
              <Link
                className="insight-card"
                href={`/insights/${a.slug}/`}
                key={a.slug}
              >
                {i < 2 ? (
                  <Visual kind={i === 0 ? "ai" : "product"} compact />
                ) : (
                  <Art kind={a.visual} />
                )}
                <div className="insight-card-content">
                  <div className="insight-meta">
                    <span>{a.category}</span>
                    <span>{readingTime(a)} min read</span>
                  </div>
                  <h3>
                    {a.title}
                    <ArrowRight size={20} />
                  </h3>
                  <p>{a.excerpt}</p>
                  <span className="insight-read">
                    Read perspective
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
