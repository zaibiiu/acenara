import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { CTA, PageIntro, Eyebrow, Button } from "@/components/ui";
import { Visual } from "@/components/visual";
import { CollaborationPhoto } from "@/components/collaboration-photo";
import { Reveal } from "@/components/motion";
import { services } from "@/content/services";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Our services",
    "Explore Acenara’s services in AI and automation, software development, cloud and data, security, digital growth, and IT support.",
    "/services/",
  );
export default function Services() {
  return (
    <>
      <PageIntro
        label="OUR SERVICES"
        title={
          <>
            A connected way
            <br />
            to <em>move forward.</em>
          </>
        }
        text="The strategy behind the product. The care inside the interface. The engineering that makes it work. Bring your digital challenges into one conversation."
      />
      <nav
        className="container service-jump-nav"
        aria-label="Service categories"
      >
        {services.map((s) => (
          <a href={`#${s.slug}`} key={s.slug}>
            <span>{s.number}</span>
            {s.short}
            <ArrowDown size={16} />
          </a>
        ))}
      </nav>
      <div className="container service-stories">
        {services.map((s) => (
          <Reveal key={s.slug}>
            <section className="service-story" id={s.slug}>
              <div className="service-story-art">
                <Visual kind={s.visual} />
                <span className="art-label">
                  ACENARA CAPABILITIES / {s.number}
                </span>
              </div>
              <div className="service-story-copy">
                <Eyebrow>
                  {s.number} / {s.title}
                </Eyebrow>
                <h2>{s.headline}</h2>
                <p>{s.intro}</p>
                <ul>
                  {s.offerings.slice(0, 5).map((o) => (
                    <li key={o.id}>
                      <Link href={`/services/${s.slug}/#${o.id}`}>
                        {o.name}
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button href={`/services/${s.slug}/`} secondary>
                  Explore {s.short.toLowerCase()}
                </Button>
                <span className="small muted">
                  {s.offerings.length} connected capabilities
                </span>
              </div>
            </section>
          </Reveal>
        ))}
      </div>
      <section className="container human-story human-reverse">
        <CollaborationPhoto kind="design" />
        <div className="human-story-copy">
          <Eyebrow>DESIGN AND ENGINEERING, IN CONVERSATION</Eyebrow>
          <h2>
            From a shared idea
            <br />
            to a <em>considered product.</em>
          </h2>
          <p>
            The strongest product decisions connect what a business needs with
            what a person can understand. We use prototypes, working examples,
            and direct feedback to make that connection tangible.
          </p>
          <Link className="text-link" href="/how-we-work/">
            Explore our approach
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="container service-help">
        <div>
          <Eyebrow>START WITH THE PROBLEM</Eyebrow>
          <h2>
            Not sure what
            <br />
            your project <em>needs?</em>
          </h2>
        </div>
        <div>
          <p>
            You don’t need to choose a technology or write a complete
            specification. Tell us where things stand and what you’d like to
            change. We can shape the next step together.
          </p>
          <Button href="/contact/">Let’s work it out</Button>
        </div>
      </section>
      <CTA />
    </>
  );
}
