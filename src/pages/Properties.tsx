import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, DollarSign } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { CountUp } from "@/components/CountUp";

const PROPERTIES = [
  {
    img: property1,
    label: "Sold Fast",
    days: "5 Days",
    area: "Brookside, KCMO",
    price: "Cash Deal",
    beds: 3,
    baths: 2,
    sqft: 1850,
    condition: "Move-In Ready",
  },
  {
    img: property2,
    label: "Cash Deal",
    days: "7 Days",
    area: "Hyde Park, KCMO",
    price: "All Cash",
    beds: 4,
    baths: 3,
    sqft: 2400,
    condition: "Light Cosmetic",
  },
  {
    img: property3,
    label: "Investment",
    days: "9 Days",
    area: "Westport, KCMO",
    price: "Off-Market",
    beds: 2,
    baths: 1,
    sqft: 1320,
    condition: "Full Renovation",
  },
  {
    img: property1,
    label: "Closed",
    days: "6 Days",
    area: "Waldo, KCMO",
    price: "Cash Deal",
    beds: 3,
    baths: 2,
    sqft: 1640,
    condition: "As-Is",
  },
  {
    img: property2,
    label: "Inherited",
    days: "10 Days",
    area: "Plaza District, KCMO",
    price: "All Cash",
    beds: 5,
    baths: 3,
    sqft: 2980,
    condition: "Estate Sale",
  },
  {
    img: property3,
    label: "Foreclosure Saved",
    days: "4 Days",
    area: "Crossroads, KCMO",
    price: "Fast Cash",
    beds: 2,
    baths: 2,
    sqft: 1180,
    condition: "Tenant Occupied",
  },
];

export default function Properties() {
  const stats = [
    { v: 248, suffix: "+", l: "Total Closed" },
    { v: 12, suffix: "+", l: "Neighborhoods" },
    { v: 7, suffix: " Days", l: "Avg. Close Time" },
    { v: 100, suffix: "%", l: "Cash Deals" },
  ];

  return (
    <>
      <Helmet>
        <title>Properties | Take U There Service LLC</title>
        <meta
          name="description"
          content="Recently acquired KCMO properties. See the homes we've helped owners move on from—quickly and fairly."
        />
        <meta property="og:title" content="Properties — Take U There Service LLC" />
        <meta
          property="og:description"
          content="A look at recently closed wholesale deals across Kansas City, MO."
        />
      </Helmet>
      <div className="pt-32 sm:pt-40">
        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                <span className="h-px w-8 bg-primary/60" /> Featured Properties
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold leading-[1.05]">
                <span className="text-gradient-luxe">Recently</span>{" "}
                <span className="text-gradient-red">acquired.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                A glimpse into the homes we've helped owners move on from—quickly, quietly, and on
                their terms. Every deal closed at title with cash in hand.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-4xl font-display font-semibold text-gradient-red">
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
              eyebrow="Portfolio"
              title="A look at our recent closes."
              subtitle="Every property here was purchased for cash, as-is, with no fees to the seller."
            />

            <div className="mt-12 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROPERTIES.map((p, i) => (
                <article
                  key={i}
                  className="group relative rounded-[1.75rem] overflow-hidden border border-white/10 bg-surface"
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={p.img}
                      alt={p.area}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="glass-strong rounded-full px-3 py-1.5 text-[11px] uppercase tracking-widest border-primary/40">
                      {p.label}
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground uppercase tracking-widest">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3 text-primary" />
                        {p.area}
                      </span>
                      <span className="text-success">{p.days}</span>
                    </div>
                    <div className="font-display text-2xl font-semibold">{p.price}</div>
                    <div className="hairline my-4" />
                    <div className="grid grid-cols-3 gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                      <div>
                        <div className="text-foreground text-sm">{p.beds}</div>Beds
                      </div>
                      <div>
                        <div className="text-foreground text-sm">{p.baths}</div>Baths
                      </div>
                      <div>
                        <div className="text-foreground text-sm">{p.sqft.toLocaleString()}</div>Sqft
                      </div>
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground/80 flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> {p.condition}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto glass-strong rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-32 -right-32 h-96 w-96 bg-success/20 blur-[120px] rounded-full" />
            <DollarSign className="relative h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="relative text-3xl sm:text-5xl font-display font-semibold text-gradient-luxe">
              Sell yours next.
            </h2>
            <p className="relative mt-4 text-muted-foreground max-w-md mx-auto">
              Get a transparent cash offer on your KCMO property—within 24 hours.
            </p>
            <Link
              to="/contact"
              className="relative mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3.5 text-sm font-medium glow-red"
            >
              Request My Offer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
