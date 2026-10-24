"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Mail,
  Cpu,
  Layers3,
  Cloud,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import { company, navigation } from "@/content/company";
import { services, type Service } from "@/content/services";
import { WhatsAppIcon } from "./icons";
const icons = [Cpu, Layers3, Cloud, ShieldCheck];

const featuredIds: Record<string, string[]> = {
  "ai-automation": [
    "strategy",
    "generative-ai",
    "assistants",
    "predictive",
    "business-automation",
    "workflows",
  ],
  "software-development": [
    "custom-software",
    "web-apps",
    "mobile",
    "saas",
    "websites",
    "commerce",
  ],
  "cloud-data": [
    "migration",
    "devops",
    "engineering",
    "dashboards",
    "databases",
    "architecture",
  ],
  "security-growth-support": [
    "security-consulting",
    "assessment",
    "consulting",
    "legacy",
    "crm",
    "seo",
  ],
};
function featuredOfferings(service: Service) {
  return service.offerings.filter((o) =>
    featuredIds[service.slug]?.includes(o.id),
  );
}

export function Header() {
  const path = usePathname();
  const [mobile, setMobile] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const servicesTrigger = useRef<HTMLButtonElement>(null);
  const megaRoot = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    if (mobile) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);
  useEffect(() => {
    setMobile(false);
    setMega(false);
  }, [path]);
  useEffect(() => {
    if (!mega) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(false);
        servicesTrigger.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (!megaRoot.current?.contains(e.target as Node)) setMega(false);
    };
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", outside);
    };
  }, [mega]);
  const close = () => {
    setMobile(false);
    trigger.current?.focus();
  };
  return (
    <header
      className={`site-header site-header-rich ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="header-utility">
        <div className="container">
          <span>
            <Globe2 size={12} />
            Lahore, Pakistan
            <span className="utility-dot" />
            Working internationally
          </span>
          <div>
            <a href={`mailto:${company.email}`}>
              <Mail size={13} />
              <span>Email the studio</span>
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="utility-talk"
            >
              <WhatsAppIcon />
              Let’s talk
            </a>
          </div>
        </div>
      </div>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Acenara home">
          <img src="/brand/logo.svg" alt="Acenara" width="196" height="44" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((n) =>
            n.label === "Services" ? (
              <div
                key={n.href}
                className="mega-root"
                ref={megaRoot}
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
                onBlurCapture={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node))
                    setMega(false);
                }}
              >
                <button
                  ref={servicesTrigger}
                  className={`nav-services ${mega ? "is-open" : ""}`}
                  aria-expanded={mega}
                  aria-controls="services-mega-menu"
                  onClick={() => setMega(true)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setMega(true);
                      requestAnimationFrame(() =>
                        document
                          .querySelector<HTMLAnchorElement>(
                            "#services-mega-menu a",
                          )
                          ?.focus(),
                      );
                    }
                  }}
                >
                  Services
                  <ChevronDown size={13} />
                </button>
                <AnimatePresence>
                  {mega && (
                    <motion.div
                      id="services-mega-menu"
                      className="services-mega-menu"
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? {} : { opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mega-heading">
                        <div>
                          <span className="eyebrow">
                            CONNECTED CAPABILITIES
                          </span>
                          <h2>One partner for your next digital chapter.</h2>
                        </div>
                        <Link href="/services/" onClick={() => setMega(false)}>
                          Explore all services
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                      <div className="mega-columns">
                        {services.map((s, i) => {
                          const Icon = icons[i];
                          return (
                            <div className="mega-column" key={s.slug}>
                              <Link
                                className="mega-category"
                                href={`/services/${s.slug}/`}
                                onClick={() => setMega(false)}
                              >
                                <span>
                                  <Icon size={23} />
                                </span>
                                <div>
                                  <strong>{s.title}</strong>
                                  <small>{s.outcome}</small>
                                </div>
                              </Link>
                              <ul>
                                {featuredOfferings(s).map((o) => (
                                  <li key={o.id}>
                                    <Link
                                      href={`/services/${s.slug}/#${o.id}`}
                                      onClick={() => setMega(false)}
                                    >
                                      {o.name}
                                      <ArrowRight size={12} />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mega-bottom">
                        <span>
                          Have a business problem, rather than a technical
                          brief? Start there.
                        </span>
                        <Link href="/contact/" onClick={() => setMega(false)}>
                          Let’s shape the next step
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={n.href}
                href={n.href}
                aria-current={
                  (
                    n.href === "/"
                      ? path === "/"
                      : path.startsWith(n.href.slice(0, -1))
                  )
                    ? "page"
                    : undefined
                }
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <Link className="header-cta" href="/contact/">
          Start a project
          <ArrowRight size={17} />
        </Link>
        <button
          className="mobile-toggle"
          ref={trigger}
          aria-label="Open navigation"
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
          onClick={() => setMobile(true)}
        >
          <Menu />
        </button>
        <dialog
          ref={dialog}
          id="mobile-navigation"
          className="mobile-dialog"
          aria-label="Main navigation"
          onCancel={(e) => {
            e.preventDefault();
            close();
          }}
          onClose={() => setMobile(false)}
        >
          <div className="mobile-menu">
            <div className="mobile-menu-top">
              <img
                src="/brand/logo.svg"
                alt="Acenara"
                width="174"
                height="40"
              />
              <button aria-label="Close navigation" onClick={close}>
                <X />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              {navigation.map((n, i) => (
                <Link key={n.href} href={n.href} onClick={close}>
                  <span className="small">0{i + 1}</span>
                  {n.label}
                  <ArrowRight size={19} />
                </Link>
              ))}
            </nav>
            <div className="mobile-service-groups">
              <p className="eyebrow">EXPLORE OUR CAPABILITIES</p>
              {services.map((s, i) => {
                const Icon = icons[i];
                return (
                  <details key={s.slug}>
                    <summary>
                      <Icon size={18} />
                      {s.title}
                      <ChevronDown size={16} />
                    </summary>
                    <div>
                      <Link href={`/services/${s.slug}/`} onClick={close}>
                        View this capability
                        <ArrowRight size={14} />
                      </Link>
                      {featuredOfferings(s).map((o) => (
                        <Link
                          key={o.id}
                          href={`/services/${s.slug}/#${o.id}`}
                          onClick={close}
                        >
                          {o.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
            <div className="mobile-contact-actions">
              <a href={`mailto:${company.email}`}>
                <Mail size={17} />
                Email us
              </a>
              <a
                className="whatsapp-link"
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                Let’s talk
              </a>
            </div>
          </div>
        </dialog>
      </div>
    </header>
  );
}
