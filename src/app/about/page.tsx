import { ArrowRight, Compass, Code2, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { CTA, PageIntro, Eyebrow, SectionHeading } from "@/components/ui";
import { ProcessJourney } from "@/components/process-journey";
import { CollaborationPhoto } from "@/components/collaboration-photo";
import { company } from "@/content/company";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "About the studio",
    "Meet Acenara, the software development and digital technology studio founded by Zohaib Akhtar in Lahore, Pakistan.",
    "/about/",
  );
export default function About() {
  return (
    <>
      <PageIntro
        label="ABOUT ACENARA"
        title={
          <>
            Thoughtful by nature.
            <br />
            <em>Purposeful by design.</em>
          </>
        }
        text="We’re a software development and digital technology studio in Lahore, bringing a product mindset to the challenges of building a digital business."
      />
      <section className="container">
        <CollaborationPhoto
          kind="collaboration"
          className="about-human-photo"
        />
        <p className="about-photo-note">
          The collaboration scenes on this website are representative generated
          imagery. They illustrate professional ways of working and do not
          depict Acenara’s actual employees, clients, or premises.
        </p>
      </section>
      <section className="container section about-statement">
        <Eyebrow>THE STUDIO</Eyebrow>
        <div>
          <h2>
            We care about what
            <br />
            your software <em>makes possible.</em>
          </h2>
          <p>
            A clearer booking journey. A business process that finally connects.
            A new product with a useful first release. We’re interested in the
            practical changes that thoughtful software can make.
          </p>
          <p>
            Acenara brings design and engineering into the same conversation. We
            help businesses shape requirements, build digital experiences,
            integrate systems, and plan what comes after launch.
          </p>
          <p>
            Our work spans websites and applications, AI and automation, cloud
            and data, and the ongoing improvements that keep a platform useful.
            The starting point is always your context: who you serve, what gets
            in the way, and where you want to go.
          </p>
        </div>
      </section>
      <section className="values-section">
        <div className="container">
          <SectionHeading
            label="WHAT GUIDES THE WORK"
            title={
              <>
                Care is a way
                <br />
                <em>of working.</em>
              </>
            }
            text="Not a slogan to put on a wall. A set of decisions that should be visible in the work."
          />
          <div className="values-grid">
            {[
              {
                icon: Compass,
                title: "Clarity before complexity",
                text: "Make the problem understandable. Keep priorities visible. Choose tools for a reason and explain the trade-offs.",
              },
              {
                icon: HeartHandshake,
                title: "A shared understanding",
                text: "Agree what success looks like, show working progress, and make room for honest questions throughout the project.",
              },
              {
                icon: Code2,
                title: "Built for the next chapter",
                text: "Consider how the product will change, who will maintain it, and what a useful handover needs to include.",
              },
            ].map((v) => (
              <div key={v.title}>
                <v.icon size={32} strokeWidth={1.1} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container section founder-section">
        <div className="founder-mark" aria-hidden="true">
          <img src="/brand/icon.svg" alt="" width="180" height="180" />
          <span>
            INDEPENDENT THINKING.
            <br />
            CONNECTED EXPERTISE.
          </span>
        </div>
        <div>
          <Eyebrow>A PERSONAL INTRODUCTION</Eyebrow>
          <h2>
            Founded with
            <br />
            <em>intention.</em>
          </h2>
          <p>
            Acenara was founded by <strong>{company.founder}</strong> with a
            focus on bringing thoughtful design and purposeful software
            development together.
          </p>
          <p>
            Based in Lahore, Pakistan, the studio is available to collaborate
            remotely with businesses internationally. We value a direct
            conversation about what you need, what is feasible, and how to take
            the next step.
          </p>
          <a className="text-link" href={`mailto:${company.email}`}>
            Say hello to Zohaib
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section className="container section border-top" id="process">
        <SectionHeading
          label="OUR APPROACH"
          title={
            <>
              From a good question
              <br />
              to <em>working software.</em>
            </>
          }
          text="Each project has its own constraints. This is the clear, collaborative structure we build around them."
        />
        <ProcessJourney />
        <Link href="/services/" className="text-link">
          Explore our capabilities
          <ArrowRight size={16} />
        </Link>
      </section>
      <CTA />
    </>
  );
}
