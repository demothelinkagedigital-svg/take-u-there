import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export type Review = {
  name: string;
  role: string;
  quote: string;
  initials?: string;
};

export function TestimonialsCarousel({
  reviews,
  autoMs = 5500,
}: {
  reviews: Review[];
  autoMs?: number;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reviews.length < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % reviews.length), autoMs);
    return () => clearInterval(id);
  }, [paused, reviews.length, autoMs]);

  const r = reviews[i];
  const initials =
    r.initials ||
    r.name
      .split(" ")
      .map((n) => n[0])
      .join("");

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-transparent to-success/15 blur-3xl rounded-[3rem]" />

      <div className="relative glass-strong rounded-[2.25rem] p-8 sm:p-12 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-success/15 blur-[100px]" />

        <Quote className="relative h-10 w-10 text-primary/60 mb-6" />

        <div className="relative min-h-[180px] sm:min-h-[160px]">
          {reviews.map((rev, idx) => (
            <div
              key={rev.name}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote
                className="text-xl sm:text-2xl lg:text-3xl font-display leading-snug text-gradient-luxe"
                style={{ fontStyle: "italic" }}
              >
                "{rev.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="relative mt-8 pt-6 border-t border-border/60 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/40 blur-md" />
              <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-primary/80 to-success/40 flex items-center justify-center text-sm font-semibold border border-white/20">
                {initials}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={() => setI((p) => (p - 1 + reviews.length) % reviews.length)}
              className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-primary/40 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next"
              onClick={() => setI((p) => (p + 1) % reviews.length)}
              className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-primary/40 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-8 bg-primary" : "w-2 bg-white/15 hover:bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
