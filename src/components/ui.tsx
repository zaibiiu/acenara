import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Button({
  href,
  children,
  secondary = false,
  light = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : ""} ${light ? "button-light" : ""} ${className}`}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
export function SectionHeading({
  label,
  title,
  text,
  children,
}: {
  label: string;
  title: ReactNode;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h2>{title}</h2>
      </div>
      <div className="section-heading-aside">
        {text && <p>{text}</p>}
        {children}
      </div>
    </div>
  );
}
export function PageIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: ReactNode;
  text: string;
}) {
  return (
    <section className="page-intro container">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <div className="intro-baseline">
        <p>{text}</p>
        <ArrowDown size={26} strokeWidth={1.2} aria-hidden="true" />
      </div>
    </section>
  );
}
export function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <Eyebrow light>Something in mind?</Eyebrow>
          <h2>
            Let’s make
            <br />
            something <em>matter.</em>
          </h2>
        </div>
        <div className="cta-aside">
          <p>
            A new idea, a complex challenge, or a product ready for its next
            chapter. Tell us what you’re thinking.
          </p>
          <Button href="/contact/" light>
            Start a conversation
          </Button>
          <span className="small muted-light">
            Based in Lahore. Working across borders.
          </span>
        </div>
      </div>
      <span className="cta-watermark" aria-hidden="true">
        a.
      </span>
    </section>
  );
}
