import { Button, Eyebrow } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container not-found">
      <div className="not-found-art" aria-hidden="true">
        4<img src="/brand/icon.svg" alt="" width="130" height="150" />4
      </div>
      <Eyebrow>A SMALL DETOUR</Eyebrow>
      <h1>
        This page took
        <br />a <em>different path.</em>
      </h1>
      <p>
        The link may have changed, or this page doesn’t exist. There’s still
        plenty to explore.
      </p>
      <div className="hero-actions">
        <Button href="/">Back to the studio</Button>
        <Button href="/contact/" secondary>
          Talk to us
        </Button>
      </div>
    </section>
  );
}
