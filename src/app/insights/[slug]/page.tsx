import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { articles, readingTime } from "@/content/insights";
import { Art } from "@/components/art";
import { CTA, Eyebrow } from "@/components/ui";
import { metadata, siteUrl } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  return a
    ? {
        ...metadata(a.title, a.excerpt, `/insights/${slug}/`),
        openGraph: {
          ...metadata(a.title, a.excerpt, `/insights/${slug}/`).openGraph,
          type: "article",
          publishedTime: `${a.date}T00:00:00+05:00`,
        },
      }
    : {};
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  const related = articles.filter((r) => r.slug !== slug).slice(0, 2);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    datePublished: `${a.date}T00:00:00+05:00`,
    author: { "@type": "Organization", name: "Acenara" },
    ...(siteUrl
      ? {
          mainEntityOfPage: `${siteUrl}/insights/${slug}/`,
          image: `${siteUrl}/brand/social.png`,
        }
      : {}),
  };
  return (
    <>
      <article>
        <header className="container article-header">
          <Link className="text-link" href="/insights/">
            <ArrowLeft size={16} />
            Back to insights
          </Link>
          <div className="article-meta">
            <span>{a.category}</span>
            <span>{readingTime(a)} min read</span>
            <time dateTime={a.date}>24 October 2026</time>
          </div>
          <h1>{a.title}</h1>
          <p>{a.excerpt}</p>
          <span className="article-byline">
            Words by Acenara · Studio perspective
          </span>
        </header>
        <div className="container article-art">
          <Art kind={a.visual} />
        </div>
        <div className="container article-layout">
          <aside>
            <p className="eyebrow">IN THIS PERSPECTIVE</p>
            <nav aria-label="Article contents">
              {a.sections.map((s, i) => (
                <a href={`#section-${i + 1}`} key={s.title}>
                  {s.title}
                </a>
              ))}
            </nav>
            <span className="small muted">
              An original studio perspective. Examples describe possible
              workflows, not client outcomes.
            </span>
          </aside>
          <div className="article-prose">
            {a.sections.map((s, i) => (
              <section key={s.title} id={`section-${i + 1}`}>
                <h2>{s.title}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
            <div className="article-takeaway">
              <Eyebrow>A USEFUL NEXT STEP</Eyebrow>
              <p>{a.takeaway}</p>
            </div>
            <p>
              Have a related challenge?{" "}
              <Link href="/contact/">Tell us what you’re working on.</Link>
            </p>
          </div>
        </div>
      </article>
      <section className="container section related-articles">
        <Eyebrow>KEEP THINKING</Eyebrow>
        <h2>
          Another <em>perspective.</em>
        </h2>
        <div className="home-insights">
          {related.map((r) => (
            <Link
              className="insight-card"
              key={r.slug}
              href={`/insights/${r.slug}/`}
            >
              <Art kind={r.visual} />
              <span className="small muted">
                {r.category} / {readingTime(r)} min read
              </span>
              <h3>
                {r.title}
                <ArrowUpRight size={20} />
              </h3>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
