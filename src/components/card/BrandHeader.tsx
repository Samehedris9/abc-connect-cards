import { company } from "@/data/employees";

export function BrandMark({ size = 40 }: { size?: number }) {
  return (
    <div
      className="grid shrink-0 place-items-center rounded-2xl bg-navy-gradient font-display tracking-tight text-primary-foreground"
      style={{
        width: size,
        height: size,
        boxShadow: "var(--shadow-soft)",
        fontSize: size * 0.4,
      }}
      aria-hidden
    >
      <span className="text-gradient-gold font-semibold">AC</span>
    </div>
  );
}

export function BrandHeader() {
  return (
    <header className="flex items-center justify-center gap-3 py-6">
      <BrandMark size={38} />
      <div className="min-w-0 text-left">
        <p className="truncate font-display text-base font-semibold tracking-tight text-navy">
          {company.name}
        </p>
        <p className="truncate text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {company.tagline}
        </p>
      </div>
    </header>
  );
}
