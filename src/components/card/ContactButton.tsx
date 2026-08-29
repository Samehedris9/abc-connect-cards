import { ChevronRight, type LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export function ContactButton({ icon: Icon, label, value, href, external }: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="tap-press group flex min-h-[62px] items-center gap-3.5 rounded-2xl border border-border bg-card px-4 py-3 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[var(--shadow-soft)]"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-gradient text-gold-soft">
        <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.9} />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </span>
        <span className="block truncate text-[0.95rem] font-medium text-foreground">
          {value}
        </span>
      </span>
      <ChevronRight
        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-gold"
        strokeWidth={2}
      />
    </a>
  );
}
