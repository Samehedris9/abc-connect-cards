import { company } from "@/data/employees";

export function Footer() {
  return (
    <footer className="py-8 text-center">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {company.name}
      </p>
      <p className="mt-1.5 text-xs text-muted-foreground/70">
        © {new Date().getFullYear()} — Digital Business Card
      </p>
    </footer>
  );
}
