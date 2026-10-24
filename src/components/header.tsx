"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/company";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Acenara home">
          <img src="/brand/logo.svg" alt="Acenara" width="192" height="42" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation
            .filter((n) => n.label !== "Home" && n.label !== "Contact")
            .map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={
                  path.startsWith(n.href.slice(0, -1)) ? "page" : undefined
                }
              >
                {n.label}
              </Link>
            ))}
        </nav>
        <Link className="header-cta" href="/contact/">
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          ref={trigger}
          className="mobile-toggle"
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
        <dialog
          id="mobile-navigation"
          ref={dialog}
          className="mobile-dialog"
          onCancel={(e) => {
            e.preventDefault();
            close();
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          onClose={() => setOpen(false)}
          aria-label="Main navigation"
        >
          <div className="mobile-menu">
            <div className="mobile-menu-top">
              <img
                src="/brand/logo.svg"
                alt="Acenara"
                width="174"
                height="38"
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
                  <ArrowUpRight size={22} aria-hidden="true" />
                </Link>
              ))}
            </nav>
            <div className="mobile-services">
              <p className="eyebrow">Explore our services</p>
              <Link href="/services/ai-automation/" onClick={close}>
                AI & automation
              </Link>
              <Link href="/services/software-development/" onClick={close}>
                Design & development
              </Link>
              <Link href="/services/cloud-data/" onClick={close}>
                Cloud & data
              </Link>
              <Link href="/services/security-growth-support/" onClick={close}>
                Security, growth & support
              </Link>
            </div>
            <p className="small">Lahore, Pakistan · Working internationally</p>
          </div>
        </dialog>
      </div>
    </header>
  );
}
