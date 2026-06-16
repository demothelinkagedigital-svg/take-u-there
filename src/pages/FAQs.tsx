import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FAQS } from "@/lib/content";

export default function FAQs() {
  const general = FAQS.slice(0, 4);
  const process = FAQS.slice(4);

  return (
    <>
      <Helmet>
        <title>FAQs | Take U There Service LLC</title>
        <meta
          name="description"
          content="Answers to the most common questions about selling your KCMO home for cash to Take U There Service LLC."
        />
        <meta property="og:title" content="Frequently Asked Questions — Take U There Service LLC" />
        <meta
          property="og:description"
          content="How fast we close, what we buy, and how our cash offers work."
        />
      </Helmet>
      <div className="pt-32 sm:pt-40">
        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              <span className="h-px w-8 bg-primary/60" /> Frequently Asked
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold leading-[1.05]">
              <span className="text-gradient-luxe">Answers,</span>{" "}
              <span className="text-gradient-red">transparently.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Everything you need to know before requesting a cash offer—and during the close.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader eyebrow="General" title="The basics." />
            <div className="mt-10">
              <FaqAccordion faqs={general} defaultOpen={0} />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto">
            <SectionHeader eyebrow="Process & Offer" title="How the deal works." />
            <div className="mt-10">
              <FaqAccordion faqs={process} defaultOpen={null} />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto glass-strong rounded-[2rem] p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center relative overflow-hidden">
            <div className="absolute -top-32 -left-32 h-96 w-96 bg-primary/25 blur-[120px] rounded-full" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-gradient-luxe">
                Still have questions?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Talk to a real human—no scripts, no pressure.
              </p>
            </div>
            <div className="relative flex flex-col sm:flex-row gap-3 md:justify-end">
              <a
                href="tel:8164339141"
                className="inline-flex items-center justify-center gap-2 glass rounded-full px-5 py-3.5 text-sm"
              >
                <Phone className="h-4 w-4 text-primary" /> (816) 433-9141
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-3.5 text-sm font-medium glow-red"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
