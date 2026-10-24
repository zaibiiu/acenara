import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Layers,
  Sparkles,
} from "lucide-react";
import { Button, CTA, Eyebrow, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { Art } from "@/components/art";
import { BookingDemo, DashboardDemo } from "@/components/demos";
import { services } from "@/content/services";
import { process } from "@/content/company";
import { articles, readingTime } from "@/content/insights";
import { metadata } from "@/lib/seo";

export const generateMetadata = () =>
  metadata(
    "Acenara — Good ideas. Exceptional execution.",
    "Acenara brings design and engineering together to build thoughtful websites, apps, AI workflows, and digital platforms. Based in Lahore. Working internationally.",
  );

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <Eyebrow>Independent thinking. Connected expertise.</Eyebrow>
            <h1>
              Good ideas.
              <br />
              Exceptional
              <br />
              <em>execution.</em>
              <span className="hero-period" aria-hidden="true">
                ●
              </span>
            </h1>
            <p>
              We bring thoughtful design and purposeful engineering together to
              build software that moves your business forward.
            </p>
            <div className="hero-actions">
              <Button href="/contact/">Start a project</Button>
              <Link className="text-link" href="/services/">
                Explore what we do
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <img
              src="/images/brand-sculpture.webp"
              alt="An original sculptural A, formed from interlocking mist-blue and ivory ribbons with a coral sphere"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
            <span className="hero-art-caption">
              FORM + FUNCTION
              <br />
              <span>AN ACENARA BRAND EXPLORATION</span>
            </span>
            <span className="art-coordinate" aria-hidden="true">
              A / 01
            </span>
          </div>
        </div>
        <div className="container hero-baseline">
          <span>SOFTWARE DEVELOPMENT & DIGITAL TECHNOLOGY STUDIO</span>
          <span className="location-dot">
            Lahore, Pakistan · Working worldwide
          </span>
          <a href="#what-we-do" aria-label="Discover our services">
            <ArrowDown size={19} />
          </a>
        </div>
      </section>
      <section className="section container" id="what-we-do">
        <Reveal>
          <SectionHeading
            label="01 / What we do"
            title={
              <>
                From the first spark
                <br />
                to the <em>next chapter.</em>
              </>
            }
            text="One connected approach to your digital business. We help you shape it, build it, and keep it moving."
          />
        </Reveal>
        <div className="service-editorial-list">
          {services.map((s) => (
            <Reveal key={s.slug}>
              <Link
                href={`/services/${s.slug}/`}
                className="service-editorial-row"
              >
                <span className="service-index">/{s.number}</span>
                <h3>{s.short}</h3>
                <p>{s.outcome}</p>
                <span className="circle-arrow">
                  <ArrowUpRight size={23} strokeWidth={1.4} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="service-footnote">
          <span>Strategy. Design. Engineering. Evolution.</span>
          <Link className="text-link" href="/services/">
            See all capabilities
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="experience-home section-dark">
        <div className="container">
          <Reveal>
            <SectionHeading
              label="02 / Platforms & possibilities"
              title={
                <>
                  Complex challenges.
                  <br />
                  <em>Clearer experiences.</em>
                </>
              }
              text="Experience across business domains informs how we approach your next product. Explore the workflows behind the interface."
            />
          </Reveal>
          <Reveal>
            <DashboardDemo />
          </Reveal>
          <div className="experience-baseline">
            <p>
              From rental operations and real estate to learning, client
              management, and connected business platforms.
            </p>
            <Link className="text-link" href="/expertise/">
              Explore our expertise
              <ArrowUpRight size={17} />
            </Link>
          </div>
          <p className="concept-caption">
            Original interface concept. Illustrative data; not a client product
            screenshot.
          </p>
        </div>
      </section>
      <section className="section container craft-section">
        <div className="craft-copy">
          <Eyebrow>03 / Details make the difference</Eyebrow>
          <h2>
            Useful by design.
            <br />
            <em>Beautiful in use.</em>
          </h2>
          <p>
            The best software makes a complicated task feel natural. We pay
            attention to the journey, the interaction, and the moment everything
            clicks.
          </p>
          <div className="craft-points">
            {[
              {
                icon: Compass,
                title: "A clear purpose",
                text: "Start with what people need to do.",
              },
              {
                icon: Layers,
                title: "A connected experience",
                text: "Make every screen part of the same story.",
              },
              {
                icon: Code2,
                title: "An engineered foundation",
                text: "Build for the next change, not just the launch.",
              },
            ].map((p) => (
              <div key={p.title}>
                <p.icon size={23} strokeWidth={1.3} />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Button href="/services/software-development/" secondary>
            Explore product development
          </Button>
        </div>
        <Reveal className="craft-demo">
          <BookingDemo />
        </Reveal>
      </section>
      <section className="principles-band">
        <div className="container principles-inner">
          <div>
            <Eyebrow>A thoughtful way to work</Eyebrow>
            <h2>
              Good work starts
              <br />
              with <em>good questions.</em>
            </h2>
          </div>
          <div className="principles-copy">
            <p>
              What should this product make possible? Where does the current
              process get in the way? What is the most useful thing to build
              first?
            </p>
            <p>
              We work through those questions with you. Clear scope, visible
              progress, and considered decisions keep the work connected to your
              business.
            </p>
            <Link className="text-link" href="/about/">
              Meet Acenara
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="04 / How we work"
          title={
            <>
              A considered path.
              <br />A <em>shared direction.</em>
            </>
          }
          text="A clear process leaves more space for good thinking. Here’s how an idea becomes working software."
        />
        <div className="process-grid">
          {process.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.035}>
              <div className="process-step">
                <span className="process-number">
                  0{i + 1}
                  <span aria-hidden="true">↗</span>
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="ai-feature">
        <div className="container ai-feature-inner">
          <Reveal>
            <Art kind="ai" />
          </Reveal>
          <div>
            <Eyebrow>Intelligence, with intention</Eyebrow>
            <h2>
              Put AI to work.
              <br />
              <em>Keep people in focus.</em>
            </h2>
            <p>
              Useful AI begins with a specific problem. We connect assistance
              and automation to real workflows, with clear boundaries and
              thoughtful human review.
            </p>
            <ul className="check-list">
              <li>
                <Check size={16} />
                Focused assistants and knowledge workflows
              </li>
              <li>
                <Check size={16} />
                Connected tools and business automation
              </li>
              <li>
                <Check size={16} />
                Evaluation, review, and practical integration
              </li>
            </ul>
            <Link className="text-link" href="/services/ai-automation/">
              Explore AI & automation
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="05 / Ideas worth sharing"
          title={
            <>
              A little perspective.
              <br />
              <em>A useful next step.</em>
            </>
          }
        >
          <Link className="text-link" href="/insights/">
            All insights
            <ArrowUpRight size={16} />
          </Link>
        </SectionHeading>
        <div className="home-insights">
          {articles.slice(0, 3).map((a) => (
            <Link
              className="insight-card"
              href={`/insights/${a.slug}/`}
              key={a.slug}
            >
              <Art kind={a.visual} />
              <div className="insight-meta">
                <span>{a.category}</span>
                <span>{readingTime(a)} min read</span>
              </div>
              <h3>
                {a.title}
                <ArrowUpRight size={20} />
              </h3>
              <p>{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
