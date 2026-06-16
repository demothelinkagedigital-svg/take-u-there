import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { CountUp } from "@/components/CountUp";
import { REVIEWS } from "@/lib/content";

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Testimonials | Take U There Service LLC</title>
        <meta
          name="description"
          content="Real reviews from KCMO homeowners who sold their property fast for cash with Take U There Service LLC."
        />
        <meta property="og:title" content="Client Testimonials — Take U There Service LLC" />
        <meta property="og:description" content="Real reviews from real Kansas City homeowners." />
      </Helmet>
      <div className="pt-32 sm:pt-40">
        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                <span className="h-px w-8 bg-primary/60" /> Client Stories
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold leading-[1.05]">
                <span className="text-gradient-luxe">What our</span>{" "}
                <span className="text-gradient-red">sellers say.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Every review here comes from a verified KCMO homeowner who closed with us. No
                filters, no fluff.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3 sm:gap-5">
            <div className="glass rounded-2xl p-5 sm:p-7 text-center">
              <div className="text-3xl sm:text-5xl font-display font-semibold text-gradient-red">
                <CountUp end={4.9} decimals={1} />
              </div>
              <div className="mt-2 flex items-center justify-center gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                Average Rating
              </div>
            </div>
            <div className="glass rounded-2xl p-5 sm:p-7 text-center">
              <div className="text-3xl sm:text-5xl font-display font-semibold text-gradient-red">
                <CountUp end={186} suffix="+" />
              </div>
              <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                Verified Reviews
              </div>
            </div>
            <div className="glass rounded-2xl p-5 sm:p-7 text-center">
              <div className="text-3xl sm:text-5xl font-display font-semibold text-gradient-red">
                <CountUp end={98} suffix="%" />
              </div>
              <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                Would Recommend
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              center
              eyebrow="Featured"
              title="One review at a time."
              subtitle="Auto-rotating. Hover to pause."
            />
            <div className="mt-12">
              <TestimonialsCarousel reviews={REVIEWS} autoMs={6000} />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Wall Of Love" title="More from real sellers." />
            <div className="mt-12 sm:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {REVIEWS.map((r, i) => (
                <figure
                  key={r.name}
                  className="relative glass-strong rounded-3xl p-7 hover:border-primary/40 transition-colors overflow-hidden"
                >
                  <div
                    className={`absolute -top-16 -left-16 h-40 w-40 rounded-full blur-3xl ${i % 2 === 0 ? "bg-primary/15" : "bg-success/15"}`}
                  />
                  <div className="relative flex items-center gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="relative text-base leading-relaxed font-display italic">
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="relative mt-6 pt-5 border-t border-border/60 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/60 to-success/40 flex items-center justify-center text-sm font-semibold border border-white/20">
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto glass-strong rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-primary/30 blur-[120px] rounded-full" />
            <h2 className="relative text-3xl sm:text-5xl font-display font-semibold text-gradient-luxe">
              Be the next happy seller.
            </h2>
            <Link
              to="/contact"
              className="relative mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3.5 text-sm font-medium glow-red"
            >
              Get My Cash Offer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
