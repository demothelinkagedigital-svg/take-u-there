import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Properties", to: "/properties" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4 transition-all`}>
      <nav
        className={`max-w-7xl mx-auto rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between transition-all ${
          scrolled ? "glass-strong shadow-elegant" : "glass"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl glass-strong flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="Take U There Service LLC"
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
            />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Take U There
            </div>
            <div className="text-sm font-display font-semibold">Service LLC</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {NAV.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === l.to
                    ? "text-foreground bg-white/[0.06]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex group items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2.5 text-sm font-medium glow-red hover:opacity-95 transition-all"
          >
            Get Cash Offer
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 rounded-xl glass-strong flex items-center justify-center"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] sm:top-[84px] bottom-0 z-40 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <div
          className={`relative mx-3 mt-3 rounded-3xl glass-strong p-6 transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((l, i) => (
              <li
                key={l.to}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={`transition-all ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              >
                <Link
                  to={l.to}
                  className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-colors ${
                    location.pathname === l.to
                      ? "bg-primary/15 border border-primary/30"
                      : "glass hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="font-display text-lg">{l.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-3.5 text-sm font-medium glow-red"
          >
            Get Cash Offer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
