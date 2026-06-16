import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Clock,
  Hammer,
  Home as HomeIcon,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  KeyRound,
  HandCoins,
  DollarSign,
  ChevronRight,
} from "lucide-react";
import heroMansion from "@/assets/hero-mansion.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { CountUp } from "@/components/CountUp";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { REVIEWS, FAQS } from "@/lib/content";

function Hero() {
  const cards = [
    { icon: Clock, label: "Fast Closing", value: "7 Days" },
    { icon: HandCoins, label: "Cash In Hand", value: "Guaranteed" },
    { icon: Hammer, label: "No Repairs", value: "As-Is" },
    { icon: HomeIcon, label: "Any Condition", value: "Welcome" },
  ];
  return (
    <section className="relative min-h-screen flex items-end pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroMansion}
          alt="Luxury mansion at dusk"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-glow-pulse" />
            KCMO 64110 · Wholesale Real Estate
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight">
            <span className="text-gradient-luxe">We Buy Property.</span>
            <br />
            <span className="text-gradient-red">Cash Offer</span>{" "}
            <span className="text-gradient-luxe">As Ease.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Sell your property fast in KCMO with no repairs, no commissions, and fast closings. A
            premium, stress-free way to move on—on your timeline.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3.5 text-sm font-medium glow-red hover:scale-[1.02] transition-transform"
            >
              Get Cash Offer
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3.5 text-sm font-medium hover:bg-white/[0.08] transition-colors"
            >
              Learn More
            </Link>
            <a
              href="tel:8164339141"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-2"
            >
              <Phone className="h-4 w-4" /> (816) 433-9141
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl">
          {cards.map((c, i) => (
            <div
              key={c.label}
              className="glass-strong rounded-2xl p-4 sm:p-5 group hover:border-primary/40 transition-all"
              style={{ animation: `float-slow 6s ease-in-out ${i * 0.4}s infinite` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="h-9 w-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <c.icon className="h-4 w-4 text-primary" />
                </div>
                <Sparkles className="h-3.5 w-3.5 text-success/70" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {c.label}
              </div>
              <div className="text-base sm:text-lg font-display font-semibold mt-0.5">
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "No Repairs",
    "No Fees",
    "No Commissions",
    "Cash Offer",
    "Sell House Fast",
    "Fast Closing",
    "Any Condition",
  ];
  return (
    <div className="relative border-y border-border/60 overflow-hidden bg-surface/40 py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((w, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-3 font-display text-xl sm:text-2xl text-muted-foreground/70"
          >
            {w}
            <span className="h-1 w-1 rounded-full bg-primary/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { v: 248, suffix: "+", l: "Homes Purchased" },
    { v: 7, suffix: " Days", l: "Average Close" },
    { v: 100, suffix: "%", l: "Cash Offers" },
    { v: 24, suffix: "h", l: "Offer Turnaround" },
  ];
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
        {stats.map((s) => (
          <div
            key={s.l}
            className="glass rounded-2xl p-5 sm:p-7 text-center hover:border-primary/40 transition-colors"
          >
            <div className="text-3xl sm:text-5xl font-display font-semibold text-gradient-red">
              <CountUp end={s.v} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: ShieldCheck,
      title: "We Buy As-Is",
      desc: "Skip the cleanup. We purchase your property in its current state—no surprises.",
      accent: "red",
    },
    {
      icon: DollarSign,
      title: "Fast Cash Offer",
      desc: "Receive a fair, no-obligation cash offer within 24 hours of contact.",
      accent: "green",
    },
    {
      icon: HandCoins,
      title: "No Realtor Fees",
      desc: "Keep more of your equity. Zero commissions, zero hidden charges, ever.",
      accent: "red",
    },
    {
      icon: Zap,
      title: "Close In 7 Days",
      desc: "Need to move quickly? We can close on your schedule—often within a week.",
      accent: "green",
    },
    {
      icon: KeyRound,
      title: "Any Situation Accepted",
      desc: "Foreclosure, inherited, vacant, behind on payments—we handle it all.",
      accent: "red",
    },
    {
      icon: CheckCircle2,
      title: "Simple Process",
      desc: "Three clear steps. No paperwork mountain. White-glove service from start to close.",
      accent: "green",
    },
  ];
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Why Homeowners Choose Us"
          title="A premium way to sell your home."
          subtitle="Six promises we deliver on—every property, every time."
        />
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative glass rounded-3xl p-6 sm:p-7 hover:bg-white/[0.06] transition-all duration-500 overflow-hidden"
            >
              <div
                className={`absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 ${item.accent === "red" ? "bg-primary/40" : "bg-success/30"}`}
              />
              <div
                className={`relative h-12 w-12 rounded-2xl flex items-center justify-center mb-5 ${item.accent === "red" ? "bg-primary/15 border border-primary/30" : "bg-success/15 border border-success/30"}`}
              >
                <item.icon
                  className={`h-5 w-5 ${item.accent === "red" ? "text-primary" : "text-success"}`}
                />
              </div>
              <h3 className="relative text-lg sm:text-xl font-display font-semibold mb-2">
                {item.title}
              </h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Contact Us",
      desc: "Reach out by phone or form. Tell us about your property—takes under two minutes.",
    },
    {
      n: "02",
      title: "Get Cash Offer",
      desc: "Within 24 hours, you'll receive a fair, all-cash offer with no obligation.",
    },
    {
      n: "03",
      title: "Review Offer",
      desc: "Take your time. Ask questions. We walk you through every line transparently.",
    },
    {
      n: "04",
      title: "Close & Get Paid",
      desc: "Pick your closing date. Sign at a local title company. Cash in hand—done.",
    },
  ];
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="The Process"
          title="Four steps. Zero friction."
          subtitle="A streamlined, modern selling experience built around your timeline."
        />
        <div className="mt-12 sm:mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="glass-strong rounded-3xl p-6 h-full hover:border-primary/40 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-primary/10 blur-3xl rounded-full" />
                  <div className="relative flex items-start justify-between mb-6">
                    <div className="h-14 w-14 rounded-2xl glass flex items-center justify-center border border-primary/30 glow-red">
                      <span className="text-sm font-display font-semibold text-primary">{s.n}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <ChevronRight className="hidden lg:block h-5 w-5 text-muted-foreground/40" />
                    )}
                  </div>
                  <h3 className="relative text-lg sm:text-xl font-display font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="relative text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialPreview() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          center
          eyebrow="Client Stories"
          title="Quietly changing how Kansas City sells."
        />
        <div className="mt-12 sm:mt-14">
          <TestimonialsCarousel reviews={REVIEWS} />
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-3 text-sm hover:bg-white/[0.08] transition-colors"
          >
            Read all reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader center eyebrow="Frequently Asked" title="Answers, transparently." />
        <div className="mt-10">
          <FaqAccordion faqs={FAQS.slice(0, 5)} />
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/faqs"
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-3 text-sm hover:bg-white/[0.08] transition-colors"
          >
            See all FAQs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CtaBlock() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden glass-strong p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-success/10 pointer-events-none" />
          <div className="absolute -top-32 -left-32 h-96 w-96 bg-primary/30 blur-[120px] rounded-full" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-semibold leading-tight">
              <span className="text-gradient-luxe">Ready to move on?</span>
              <br />
              <span className="text-gradient-red">Get your cash offer today.</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
              No obligation. No pressure. Just a fair, all-cash offer within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3.5 text-sm font-medium glow-red"
              >
                Get Cash Offer{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:8164339141"
                className="inline-flex items-center gap-2 glass rounded-full px-6 py-3.5 text-sm"
              >
                <Phone className="h-4 w-4" /> (816) 433-9141
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Take U There Service LLC | We Buy Houses Cash in KCMO</title>
        <meta
          name="description"
          content="Sell your KCMO property fast for cash. No repairs, no fees, no commissions. Close in 7 days with Take U There Service LLC."
        />
        <meta property="og:title" content="Take U There Service LLC | Cash Offers in KCMO" />
        <meta
          property="og:description"
          content="We buy houses fast for cash in Kansas City. No repairs, no fees, fast closing."
        />
      </Helmet>
      <Hero />
      <Marquee />
      <Stats />
      <Benefits />
      <HowItWorks />
      <TestimonialPreview />
      <FaqPreview />
      <CtaBlock />
    </>
  );
}
