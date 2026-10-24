import Link from "next/link";
import { Mail, MapPin, ArrowRight, Globe2 } from "lucide-react";
import { company, navigation } from "@/content/company";
import { services } from "@/content/services";
import { WhatsAppIcon } from "./icons";
export function Footer() {
  return (
    <footer className="site-footer footer-rich">
      <div className="container">
        <div className="footer-topline">
          <Link href="/" aria-label="Acenara home">
            <img
              src="/brand/logo-dark.svg"
              alt="Acenara"
              width="210"
              height="48"
            />
          </Link>
          <p>
            Design that connects.
            <br />
            <strong>Engineering that moves you forward.</strong>
          </p>
          <Link href="/contact/" className="footer-project-link">
            Start a project
            <ArrowRight size={19} />
          </Link>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-label">BUILT WITH INTENTION</span>
            <p>
              Software, products, and connected systems shaped around the way
              your business works.
            </p>
            <span className="footer-location">
              <Globe2 size={16} />
              Lahore, Pakistan
              <br />
              Available to collaborate internationally
            </span>
          </div>
          <div>
            <h2 className="footer-label">Explore Acenara</h2>
            {navigation
              .filter((n) => n.label !== "Home")
              .map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
          </div>
          <div>
            <h2 className="footer-label">Connected expertise</h2>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`}>
                {s.short}
              </Link>
            ))}
            <Link href="/solutions/">Business solutions</Link>
            <Link href="/how-we-work/">Our delivery process</Link>
          </div>
          <div className="footer-contact">
            <h2 className="footer-label">Start a conversation</h2>
            <a href={`mailto:${company.email}`}>
              <span className="contact-icon">
                <Mail size={17} />
              </span>
              {company.email}
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon whatsapp-icon">
                <WhatsAppIcon />
              </span>
              {company.phone}
            </a>
            <address>
              <MapPin size={17} />
              <span>{company.address}</span>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Acenara. All rights reserved.
          </span>
          <span>Thoughtfully designed. Purposefully engineered.</span>
          <Link href="/privacy/">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
