import { Link } from "@tanstack/react-router";
import { socialIconMap } from "@/components/SocialIcons";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";


export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="font-display text-lg tracking-tight text-ink shrink-0 whitespace-nowrap hover:opacity-85 transition-opacity"
        >
          Anubha Singh
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm text-muted-foreground font-medium">
          <Link to="/" hash="independent-projects" className="transition-colors hover:text-primary whitespace-nowrap">
            Independent Projects
          </Link>
          <Link to="/" hash="work" className="transition-colors hover:text-primary whitespace-nowrap">
            Case Studies
          </Link>
          <Link to="/" hash="experience" className="transition-colors hover:text-primary whitespace-nowrap">
            Experience
          </Link>
          <Link to="/" hash="contact" className="transition-colors hover:text-primary whitespace-nowrap">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 -mr-2 rounded-md text-ink hover:text-primary hover:bg-muted/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <nav
          className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1 shadow-lg animate-in slide-in-from-top-2 duration-150"
          aria-label="Mobile navigation"
        >
          <Link
            to="/"
            hash="independent-projects"
            onClick={() => setIsOpen(false)}
            className="py-2.5 text-base font-medium text-ink hover:text-primary transition-colors border-b border-border/30"
          >
            Independent Projects
          </Link>
          <Link
            to="/"
            hash="work"
            onClick={() => setIsOpen(false)}
            className="py-2.5 text-base font-medium text-ink hover:text-primary transition-colors border-b border-border/30"
          >
            Case Studies
          </Link>
          <Link
            to="/"
            hash="experience"
            onClick={() => setIsOpen(false)}
            className="py-2.5 text-base font-medium text-ink hover:text-primary transition-colors border-b border-border/30"
          >
            Experience
          </Link>
          <Link
            to="/"
            hash="contact"
            onClick={() => setIsOpen(false)}
            className="py-2.5 text-base font-medium text-ink hover:text-primary transition-colors pt-2.5"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anubha-singh-310879148/" },
  { label: "GitHub", href: "https://github.com/Anubha-Singh" },
  { label: "YouTube", href: "https://youtube.com/@gritgrid-4u?si=U3M_U6rPdTWWtfXK" },
  { label: "Kaggle", href: "https://www.kaggle.com/cerolacia" },
  { label: "Medium", href: "https://medium.com/@anubhabit687" },
  { label: "Email", href: "mailto:anubhabit687@gmail.com" },
  { label: "Phone", href: "tel:+917903762263" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="rule-top mt-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-2 text-3xl text-ink">Let's talk product systems.</h2>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "noreferrer"}
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                aria-label={link.label}
              >
                {socialIconMap[link.label]}
                <span>{link.label}</span>
              </a>
            ))}

          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anubha Singh · Product Professional
        </p>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = root.querySelectorAll<HTMLElement>(
      "main > section > *, article > *:not(.prose-case), .prose-case > *, footer > div > *",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
