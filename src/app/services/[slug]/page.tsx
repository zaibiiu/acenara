import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/content/services";
import { metadata } from "@/lib/seo";
import { Visual } from "@/components/visual";
import { CTA, Eyebrow, Button, SectionHeading } from "@/components/ui";
import { BookingDemo } from "@/components/demos";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return s ? metadata(s.title, s.intro, `/services/${slug}/`) : {};
}
export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <>
      <section className="container detail-hero">
        <div>
          <Link href="/services/" className="breadcrumb">
            Services / {s.title}
          </Link>
          <Eyebrow>CAPABILITY {s.number}</Eyebrow>
          <h1>{s.headline}</h1>
          <p>{s.intro}</p>
          <Button href="/contact/">Discuss your project</Button>
        </div>
        <Visual kind={s.visual} />
      </section>
      <section className="container section detail-body">
        <aside className="detail-sidebar">
          <p className="eyebrow">IN THIS CAPABILITY</p>
          <nav aria-label={`${s.title} services`}>
            {s.offerings.map((o) => (
              <a key={o.id} href={`#${o.id}`}>
                {o.name}
              </a>
            ))}
          </nav>
          <Link className="text-link" href="/contact/">
            Talk to Acenara
            <ArrowRight size={16} />
          </Link>
        </aside>
        <div>
          <Eyebrow>WHAT WE CAN HELP WITH</Eyebrow>
          <h2>
            Practical expertise.
            <br />
            <em>Specific possibilities.</em>
          </h2>
          <div className="offering-list">
            {s.offerings.map((o, i) => (
              <section className="offering" key={o.id} id={o.id}>
                <span className="small muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{o.name}</h3>
                  <p>{o.description}</p>
                </div>
                <Link
                  href={`/contact/?service=${encodeURIComponent(o.name)}`}
                  aria-label={`Discuss ${o.name}`}
                >
                  <ArrowRight size={22} />
                </Link>
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-usecases">
        <div className="container">
          <SectionHeading
            label="FROM CAPABILITY TO CONTEXT"
            title={
              <>
                What could this
                <br />
                <em>look like for you?</em>
              </>
            }
            text="These are example scenarios to make the work tangible. We define the actual scope around your business."
          />
          <div className="usecase-list">
            {s.examples.map((e, i) => (
              <div key={e}>
                <span>0{i + 1}</span>
                <p>{e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container section detail-approach">
        <div>
          <Eyebrow>HOW WE APPROACH IT</Eyebrow>
          <h2>
            Understand.
            <br />
            Build. <em>Refine.</em>
          </h2>
          <p className="muted">
            A useful solution needs clear requirements, visible decisions, and a
            practical handover.
          </p>
        </div>
        <div className="approach-list">
          {s.approach.map((a, i) => (
            <div key={a}>
              <span>0{i + 1}</span>
              <p>{a}</p>
            </div>
          ))}
          <h3>Technical building blocks</h3>
          <div className="capability-chips">
            {s.capabilities.map((c) => (
              <span key={c}>
                <Check size={13} />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
      {slug === "software-development" && (
        <section className="service-demo-strip container">
          <div>
            <Eyebrow>DESIGN YOU CAN FEEL</Eyebrow>
            <h2>
              A better interaction
              <br />
              is a <em>better product.</em>
            </h2>
            <p>
              Try choosing a date and time in this original appointment
              interface. Small decisions add up to an experience that feels
              natural.
            </p>
          </div>
          <BookingDemo />
        </section>
      )}
      <section className="container related-services">
        <Eyebrow>KEEP EXPLORING</Eyebrow>
        <div>
          {services
            .filter((r) => r.slug !== s.slug)
            .map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}/`}>
                <span>{r.number}</span>
                <h3>{r.short}</h3>
                <ArrowRight size={22} />
              </Link>
            ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
