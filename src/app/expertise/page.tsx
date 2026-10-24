import { PageIntro, CTA, Eyebrow } from "@/components/ui";
import { DashboardDemo } from "@/components/demos";
import { Art } from "@/components/art";
import { experience } from "@/content/company";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Platforms & experience",
    "Explore Acenara’s domain experience across rental management, property, education, business platforms, tracking, client management, and AI.",
    "/expertise/",
  );
export default function Expertise() {
  return (
    <>
      <PageIntro
        label="PLATFORMS & SOLUTIONS"
        title={
          <>
            Different domains.
            <br />
            <em>Connected thinking.</em>
          </>
        }
        text="Software takes its shape from the people and processes around it. These areas of prior development experience inform the questions we ask and the products we help shape."
      />
      <section className="container expertise-feature">
        <DashboardDemo />
        <div className="expertise-feature-note">
          <Eyebrow>EXPERIENCE, IN CONTEXT</Eyebrow>
          <p>
            Domain experience may include work carried out in previous teams or
            engagements. It is presented here as background knowledge, rather
            than as a list of Acenara client contracts. All visuals are original
            illustrative concepts.
          </p>
        </div>
      </section>
      <section className="container section experience-grid">
        {experience.map((e, i) => (
          <article className="experience-card" key={e.name}>
            <Art kind={e.visual} />
            <div className="experience-card-meta">
              <span>
                0{i + 1} / {e.type}
              </span>
              <span>DOMAIN EXPERIENCE</span>
            </div>
            <h2>{e.name}</h2>
            <p>{e.description}</p>
          </article>
        ))}
      </section>
      <section className="container domain-note">
        <h2>
          The domain changes.
          <br />
          <em>The care stays.</em>
        </h2>
        <p>
          Understanding the workflow comes before choosing the interface. We
          begin with the records, decisions, and handoffs that make your
          business different, then design the software around them.
        </p>
      </section>
      <CTA />
    </>
  );
}
