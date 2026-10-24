import { PageIntro, CTA, Eyebrow, SectionHeading } from "@/components/ui";
import { DashboardDemo } from "@/components/demos";
import { Art } from "@/components/art";
import { Visual } from "@/components/visual";
import { PlatformExperience } from "@/components/platform-experience";
import { experience } from "@/content/company";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Selected experience",
    "Prior platform development experience and sector understanding across rental management, property, learning, operations, tracking, client management, and AI.",
    "/expertise/",
  );
export default function Expertise() {
  return (
    <>
      <PageIntro
        label="SELECTED EXPERIENCE"
        title={
          <>
            Different systems.
            <br />
            <em>A connected perspective.</em>
          </>
        }
        text="Every domain brings its own decisions, records, and workflows. Prior platform development experience informs how we approach a new business challenge."
      />
      <section className="container experience-platform-section">
        <PlatformExperience />
      </section>
      <section className="experience-dashboard-section">
        <div className="container">
          <SectionHeading
            label="BEHIND EVERY SCREEN, A BUSINESS"
            title={
              <>
                Operations made visible.
                <br />
                <em>Decisions made clearer.</em>
              </>
            }
            text="An original interface study exploring the connection between everyday activity, workflows, and reporting."
          />
          <DashboardDemo />
          <p className="concept-caption">
            Original illustrative concept. Demo data; not a screenshot of a
            named platform.
          </p>
        </div>
      </section>
      <section className="container section">
        <SectionHeading
          label="INDUSTRIES & SYSTEMS"
          title={
            <>
              Understand the domain.
              <br />
              <em>Shape a better solution.</em>
            </>
          }
          text="These experience areas provide context. Each new project still starts with the details of your business."
        />
        <div className="experience-grid">
          {experience.map((e, i) => (
            <article className="experience-card" key={e.name}>
              {["desktop", "cloud", "ai"].includes(e.visual) ? (
                <Visual kind={e.visual} compact />
              ) : (
                <Art kind={e.visual} />
              )}
              <div className="experience-card-body">
                <div className="experience-card-meta">
                  <span>
                    0{i + 1} / {e.type}
                  </span>
                  <span>DOMAIN EXPERIENCE</span>
                </div>
                <h2>{e.name}</h2>
                <p>{e.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="container domain-note">
        <h2>
          The context changes.
          <br />
          <em>The care stays.</em>
        </h2>
        <p>
          Platform names identify prior experience rather than ownership,
          endorsement, or direct Acenara contracts. Our original visuals
          describe possible product experiences and are not presented as client
          screenshots.
        </p>
      </section>
      <CTA />
    </>
  );
}
