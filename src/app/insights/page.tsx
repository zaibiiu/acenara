import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro, CTA, Eyebrow } from "@/components/ui";
import { InsightList } from "@/components/insight-list";
import { Art } from "@/components/art";
import { articles, readingTime } from "@/content/insights";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Insights",
    "Useful perspectives on product design, software engineering, AI, business automation, SaaS, and security from Acenara.",
    "/insights/",
  );
export default function Insights() {
  const a = articles[0];
  return (
    <>
      <PageIntro
        label="THE ACENARA JOURNAL"
        title={
          <>
            Good questions.
            <br />
            <em>Useful perspectives.</em>
          </>
        }
        text="Notes on building better software, making technology useful, and thinking carefully about the next step."
      />
      <section className="container">
        <Link className="featured-insight" href={`/insights/${a.slug}/`}>
          <Art kind={a.visual} />
          <div>
            <Eyebrow>FEATURED PERSPECTIVE</Eyebrow>
            <span className="small muted">
              {a.category} / {readingTime(a)} min read
            </span>
            <h2>{a.title}</h2>
            <p>{a.excerpt}</p>
            <span className="text-link">
              Read the perspective
              <ArrowRight size={18} />
            </span>
            <time dateTime={a.date}>24 October 2026</time>
          </div>
        </Link>
      </section>
      <section className="container section">
        <InsightList />
      </section>
      <CTA />
    </>
  );
}
