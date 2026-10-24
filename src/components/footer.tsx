import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company, navigation } from "@/content/company";
import { services } from "@/content/services";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="Acenara home">
              <img
                src="/brand/logo.svg"
                alt="Acenara"
                width="192"
                height="42"
              />
            </Link>
            <p>
              Thoughtful design.
              <br />
              Purposeful engineering.
              <br />
              Software built to move you forward.
            </p>
            <span className="location-dot small">
              Lahore, Pakistan · Available worldwide
            </span>
          </div>
          <div>
            <h2 className="footer-label">Explore</h2>
            {navigation
              .filter((n) => n.label !== "Home" && n.label !== "Contact")
              .map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
            <Link href="/contact/">Start a project</Link>
          </div>
          <div>
            <h2 className="footer-label">What we do</h2>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`}>
                {s.short}
              </Link>
            ))}
          </div>
          <div className="footer-contact">
            <h2 className="footer-label">Say hello</h2>
            <a href={`mailto:${company.email}`}>
              {company.email}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              {company.phone}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <address>{company.address}</address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Acenara. All rights reserved.
          </span>
          <span>Made with intention.</span>
          <Link href="/privacy/">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
