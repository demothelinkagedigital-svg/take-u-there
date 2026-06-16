export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 ${center ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-primary/60" />
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-semibold leading-[1.05] text-gradient-luxe">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base text-muted-foreground ${center ? "max-w-xl mx-auto" : "max-w-xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
