import Link from "next/link";
import { CollaborationPhoto } from "@/components/collaboration-photo";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers3,
  Workflow,
  Boxes,
  BarChart3,
  HeartHandshake,
} from "lucide-react";
import { PageIntro, CTA, Eyebrow, Button } from "@/components/ui";
import { Visual } from "@/components/visual";
import { Reveal } from "@/components/motion";
import { solutions } from "@/content/studio";
import { metadata } from "@/lib/seo";
const icons = [Cpu, Layers3, Boxes, Workflow, BarChart3, HeartHandshake];
export const generateMetadata = () =>
  metadata(
    "Business solutions",
    "Connected solutions for digital products, intelligent operations, business platforms, data, and customer experience. Explore Acenara’s approach.",
    "/solutions/",
  );
export default function Solutions() {
  return (
    <>
      <PageIntro
        label="BUSINESS SOLUTIONS"
        title={
          <>
            Your business challenge.
            <br />
            <em>A connected solution.</em>
          </>
        }
        text="Technology should make the work clearer. We bring design, software, and systems together around the problem you need to solve."
      />
      <nav
        className="container solution-jump-links"
        aria-label="Solution areas"
      >
        {solutions.map((s, i) => {
          const Icon = icons[i];
          return (
            <a href={`#${s.id}`} key={s.id}>
              <Icon size={20} />
              {s.title}
              <ArrowRight size={14} />
            </a>
          );
        })}
      </nav>
      <div className="container section solution-stories">
        {solutions.map((s, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={s.id}>
              <section className="solution-story" id={s.id}>
                <Visual kind={s.image} />
                <div>
                  <Eyebrow>{s.category}</Eyebrow>
                  <span className="solution-story-icon">
                    <Icon size={29} />
                  </span>
                  <h2>{s.title}</h2>
                  <p className="solution-description">{s.description}</p>
                  <div className="solution-challenge">
                    <strong>Where it starts</strong>
                    <p>{s.challenge}</p>
                  </div>
                  <ul>
                    {s.outcomes.map((o) => (
                      <li key={o}>
                        <CheckCircle2 size={17} />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Button href={`/services/${s.service}/`} secondary>
                    Explore the capabilities
                  </Button>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
      <section className="container human-story">
        <CollaborationPhoto kind="strategy" />
        <div className="human-story-copy">
          <Eyebrow>YOUR CONTEXT COMES FIRST</Eyebrow>
          <h2>
            A solution starts
            <br />
            with <em>understanding.</em>
          </h2>
          <p>
            Before choosing a tool or a platform, we want to understand the
            business behind the requirement. A focused conversation can reveal
            which parts of the problem belong together.
          </p>
          <Link className="text-link" href="/contact/">
            Start the conversation
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="container solution-help">
        <Eyebrow>START WITH THE CONTEXT</Eyebrow>
        <h2>
          Your challenge might
          <br />
          cross <em>more than one area.</em>
        </h2>
        <p>
          That’s normal. A customer portal may need an integration. A reporting
          challenge may begin with the data model. Tell us what is happening
          today, and we can map the connections together.
        </p>
        <Link className="text-link" href="/contact/">
          Let’s work through it
          <ArrowRight size={18} />
        </Link>
      </section>
      <CTA />
    </>
  );
}
