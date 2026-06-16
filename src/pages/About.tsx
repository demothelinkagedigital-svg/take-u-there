import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, HandCoins, Zap, Users, Heart, Award } from "lucide-react";
import aboutHouse from "@/assets/about-house.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { CountUp } from "@/components/CountUp";

const founderImage = "https://cdn.builder.io/api/v1/image/assets%2F7f3a261a364e4e158e176b65dc7b168f%2F09c1e0ec5cf64824b079a3aec0ff92c5?format=webp&width=800&height=1200";

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity First",
      desc: "Every offer is transparent. We explain the math, the process, and the timeline—line by line.",
    },
    {
      icon: HandCoins,
      title: "Fair Cash Offers",
      desc: "We respect your equity. Our offers reflect real comps, real condition, and real market data.",
    },
    {
      icon: Zap,
      title: "Speed Without Compromise",
      desc: "Most deals close in 7 days—but never at the cost of your peace of mind.",
    },
    {
      icon: Heart,
      title: "Human Service",
      desc: "You'll work directly with our team. Real people, real phones, real answers.",
    },
    {
      icon: Users,
      title: "Local Roots",
      desc: "Born and built in Kansas City. We know the neighborhoods, the title companies, and the market.",
    },
    {
      icon: Award,
      title: "Track Record",
      desc: "Hundreds of homes purchased. Zero broken promises. Reviews you can verify.",
    },
  ];

  const stats = [
    { v: 248, suffix: "+", l: "Homes Purchased" },
    { v: 12, suffix: "+", l: "KCMO Neighborhoods" },
    { v: 7, suffix: " Days", l: "Average Close" },
    { v: 100, suffix: "%", l: "Cash Deals" },
  ];

  return (
    <>
      <Helmet>
        <title>About | Take U There Service LLC</title>
        <meta
          name="description"
          content="Family-run Kansas City wholesaling team led by Jeffery Scott. Built on speed, fairness, and human service."
        />
        <meta property="og:title" content="About Take U There Service LLC" />
        <meta
          property="og:description"
          content="Family-run Kansas City wholesaling team built on speed, fairness, and service."
        />
      </Helmet>
      <div className="pt-32 sm:pt-40">
        <section className="px-4 sm:px-6 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                <span className="h-px w-8 bg-primary/60" /> About Us
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold leading-[1.05]">
                <span className="text-gradient-luxe">Helping homeowners</span>{" "}
                <span className="text-gradient-red">move forward.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Take U There Service LLC is a Kansas City-based real estate wholesaling company
                built on speed, fairness, and human service. Whether you're facing foreclosure,
                relocating, downsizing, or simply ready to move on, we make selling your home feel
                effortless.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-success/10 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10">
                <img
                  src={founderImage}
                  alt="Jeffery Scott, Founder"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 max-w-[260px] hidden sm:block">
                <p className="text-xs text-black leading-relaxed italic">
                  "Smoothest sale we've ever experienced. Eusi delivered—exactly as promised."
                </p>
                <div className="mt-3 text-[10px] uppercase tracking-widest text-black">
                  — Verified Seller
                </div>
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Meet The Founder" title="Jeffery Scott." />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Jeffery founded Take U There Service LLC with a simple belief: selling your home
                shouldn't feel like a battle. After years of watching neighbors get squeezed by
                aggressive investors and opaque processes, he built a different kind of wholesaling
                business—one rooted in transparency, fair offers, and concierge-level service.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Today, the team works with homeowners across KCMO who need to sell quickly,
                privately, or simply without the stress of the traditional listing process.
              </p>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border/60">
                <img src={aboutHouse} alt="Jeffery Scott" className="h-14 w-14 rounded-full object-cover border border-white/20" />
                <div>
                  <div className="font-display text-lg italic">Jeffery Scott</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">
                    Founder · Take U There Service LLC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {stats.map((s) => (
              <div key={s.l} className="glass-strong rounded-3xl p-5 sm:p-7 text-center">
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

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="Our Values"
              title="What we stand for."
              subtitle="The non-negotiables that shape every offer, every conversation, every close."
            />
            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group relative glass rounded-3xl p-6 sm:p-7 hover:bg-white/[0.06] transition-all overflow-hidden"
                >
                  <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                  <div className="relative h-12 w-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                    <v.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="relative text-lg sm:text-xl font-display font-semibold mb-2">
                    {v.title}
                  </h3>
                  <p className="relative text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto glass-strong rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-32 -left-32 h-96 w-96 bg-primary/30 blur-[120px] rounded-full" />
            <h2 className="relative text-3xl sm:text-5xl font-display font-semibold text-gradient-luxe">
              Let's talk about your property.
            </h2>
            <p className="relative mt-4 text-muted-foreground max-w-md mx-auto">
              No obligation, no pressure—just a fair cash offer within 24 hours.
            </p>
            <Link
              to="/contact"
              className="relative mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3.5 text-sm font-medium glow-red"
            >
              Get Cash Offer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
