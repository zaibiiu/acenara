import { CollaborationPhoto } from "@/components/collaboration-photo";
import {
  ListChecks,
  MessagesSquare,
  GitBranch,
  CheckCircle2,
} from "lucide-react";
import {
  PageIntro,
  CTA,
  Eyebrow,
  SectionHeading,
  Button,
} from "@/components/ui";
import { ProcessJourney } from "@/components/process-journey";
import { Visual } from "@/components/visual";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "How we work",
    "Discover Acenara’s six-phase process: discovery, definition, design, engineering, validation, and launch. Clear priorities and visible progress.",
    "/how-we-work/",
  );
export default function HowWeWork() {
  return (
    <>
      <PageIntro
        label="OUR DELIVERY APPROACH"
        title={
          <>
            A clear direction.
            <br />
            <em>From idea to release.</em>
          </>
        }
        text="A good process turns uncertainty into useful decisions. We agree what matters, make the work visible, and keep the product connected to your business."
      />
      <section className="container process-page">
        <ProcessJourney />
      </section>
      <section className="container human-story">
        <CollaborationPhoto kind="architecture" />
        <div className="human-story-copy">
          <Eyebrow>MAKE THE THINKING VISIBLE</Eyebrow>
          <h2>
            Shared understanding
            <br />
            is a <em>practical advantage.</em>
          </h2>
          <p>
            Sketch the system. Walk through a real task. Review the prototype.
            Specific examples turn abstract requirements into decisions everyone
            can discuss.
          </p>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="WHAT GOOD COLLABORATION NEEDS"
          title={
            <>
              The way we work
              <br />
              is part of <em>what we build.</em>
            </>
          }
          text="Every engagement has its own scope and constraints. These principles make the work easier to understand and manage."
        />
        <div className="collaboration-grid">
          {[
            {
              icon: ListChecks,
              title: "An agreed scope",
              text: "Requirements and acceptance criteria make priorities explicit. When something changes, we discuss its effect on the work and agree what happens next.",
            },
            {
              icon: MessagesSquare,
              title: "A useful conversation",
              text: "Working demonstrations and specific questions keep feedback practical. We agree the communication rhythm and points of contact for your engagement.",
            },
            {
              icon: GitBranch,
              title: "A considered handover",
              text: "Deployment, configuration, documentation, and operational ownership belong in the delivery plan. We make those responsibilities visible before release.",
            },
          ].map((v) => (
            <article key={v.title}>
              <span className="feature-icon">
                <v.icon size={27} />
              </span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="workflow-feature">
        <div className="container">
          <Visual kind="cloud" />
          <div>
            <Eyebrow light>BUILT TO KEEP MOVING</Eyebrow>
            <h2>
              A launch is a milestone.
              <br />
              <em>Usefulness is the goal.</em>
            </h2>
            <p>
              We think beyond the first screen and the first release. That means
              understanding who maintains the product, how feedback reaches the
              roadmap, and what a practical next increment looks like.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 size={17} />
                Delivery shaped around a useful first release
              </li>
              <li>
                <CheckCircle2 size={17} />
                Clear acceptance and release checks
              </li>
              <li>
                <CheckCircle2 size={17} />
                Support and maintenance scope agreed together
              </li>
            </ul>
            <Button href="/contact/" light>
              Discuss your project
            </Button>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
