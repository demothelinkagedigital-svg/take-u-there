import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Properties", to: "/properties" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "FAQs", to: "/faqs" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <footer className="relative border-t border-border/60 px-4 sm:px-6 pt-16 pb-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl glass-strong flex items-center justify-center overflow-hidden">
                <img
                  src={logo}
                  alt="Take U There Service LLC"
                  className="h-11 w-11 object-contain"
                />
              </div>
              <div>
                <div className="font-display text-lg font-semibold">Take U There Service LLC</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">
                  Wholesale Real Estate · KCMO
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
              A premium, modern way to sell your KCMO property fast for cash. No repairs, no fees,
              no friction.
            </p>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Twitter].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:border-primary/40 transition-colors"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Navigate
            </div>
            <ul className="space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </div>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary" /> (816) 433-9141
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary" /> takeuthereservice@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary" /> KCMO 64110
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />
        <div className="flex flex-wrap justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Take U There Service LLC. All rights reserved.</p>
          <p>Owner · Eusi Juka</p>
        </div>
      </div>
    </footer>
  );
}
