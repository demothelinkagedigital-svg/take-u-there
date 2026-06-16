import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...props}
        className="mt-1.5 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors"
      />
    </div>
  );
}

function Row({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 group">
      <div className="h-12 w-12 rounded-xl glass flex items-center justify-center border-primary/20 group-hover:border-primary/50 transition-colors">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contact | Take U There Service LLC</title>
        <meta
          name="description"
          content="Request a free, no-obligation cash offer for your KCMO property. We respond within 24 hours."
        />
        <meta property="og:title" content="Contact Take U There Service LLC" />
        <meta
          property="og:description"
          content="Get a free cash offer on your KCMO home in 24 hours."
        />
      </Helmet>
      <div className="pt-32 sm:pt-40">
        <section className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                <span className="h-px w-8 bg-primary/60" /> Contact
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold leading-[1.05]">
                <span className="text-gradient-luxe">Get your</span>{" "}
                <span className="text-gradient-red">cash offer.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Tell us about your KCMO property. We'll send a fair, all-cash offer within 24
                hours—no pressure, no obligation.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden glass-strong p-6 sm:p-10 lg:p-14">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background/0 to-background pointer-events-none" />
              <div className="absolute -top-32 -left-32 h-96 w-96 bg-primary/25 blur-[120px] rounded-full" />
              <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-success/15 blur-[120px] rounded-full" />

              <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold leading-tight text-gradient-luxe">
                    Reach out — we respond fast.
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                    Prefer to talk? Call us. Prefer to type? Use the form. Either way, you'll hear
                    from a real human within 24 hours.
                  </p>

                  <div className="mt-8 space-y-5">
                    <Row
                      icon={Phone}
                      label="Call us"
                      value="(816) 433-9141"
                      href="tel:8164339141"
                    />
                    <Row
                      icon={Mail}
                      label="Email"
                      value="takeuthereservice@gmail.com"
                      href="mailto:takeuthereservice@gmail.com"
                    />
                    <Row icon={MapPin} label="Service area" value="Kansas City, MO 64110" />
                    <Row icon={Clock} label="Hours" value="Mon–Sat · 8am – 7pm CST" />
                  </div>

                  <div className="mt-8 glass rounded-2xl p-5 flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">Average response time</div>
                      <div className="text-xs text-muted-foreground">
                        Most sellers receive a callback within 2 hours during business hours.
                      </div>
                    </div>
                  </div>
                </div>

                {submitted ? (
                  <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center">
                    <div className="h-14 w-14 rounded-full bg-success/20 border border-success/40 flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="h-5 w-5 text-success" />
                    </div>
                    <h3 className="font-display text-2xl mb-2">Thanks — we got it.</h3>
                    <p className="text-sm text-muted-foreground">
                      A member of our team will reach out within 24 hours with your no-obligation
                      cash offer.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="glass-strong rounded-3xl p-6 sm:p-8 space-y-4"
                  >
                    <Field label="Full Name" type="text" placeholder="Jane Doe" required />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Phone" type="tel" placeholder="(816) 555-0100" required />
                      <Field label="Email" type="email" placeholder="you@email.com" required />
                    </div>
                    <Field
                      label="Property Address"
                      type="text"
                      placeholder="123 Main St, Kansas City, MO"
                      required
                    />
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">
                        Tell us about your property
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Condition, timeline, situation…"
                        className="mt-1.5 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-6 py-4 text-sm font-medium glow-red hover:scale-[1.01] transition-transform"
                    >
                      Get My Cash Offer
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <p className="text-[11px] text-center text-muted-foreground">
                      By submitting, you agree to be contacted about your property. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
