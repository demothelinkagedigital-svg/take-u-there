import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({
  faqs,
  defaultOpen = 0,
}: {
  faqs: FaqItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen ? "border-primary/40 bg-white/[0.04]" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-5 hover:bg-white/[0.03] transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base sm:text-lg pr-6">{f.q}</span>
              <span
                className={`shrink-0 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-primary text-primary-foreground rotate-180 scale-110" : "glass"
                }`}
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
