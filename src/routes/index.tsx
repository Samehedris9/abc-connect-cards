import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/card/BrandHeader";
import { Footer } from "@/components/card/Footer";
import { company, employees } from "@/data/employees";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${company.name} — Digital Business Cards` },
      {
        name: "description",
        content:
          "Digital business cards for the ABC Counsel consulting team. Call, message, connect and save contacts instantly.",
      },
      { property: "og:title", content: `${company.name} — Digital Business Cards` },
      {
        property: "og:description",
        content: "Meet the ABC Counsel team and save their contact details in one tap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-[0.08]"
        style={{ background: "var(--gradient-gold)", filter: "blur(90px)" }}
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[460px] py-14">
        <div className="flex animate-rise flex-col items-center text-center">
          <BrandMark size={62} />
          <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-navy">
            {company.name}
          </h1>
          <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {company.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Select a team member to open their digital business card.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {employees.map((employee, i) => (
            <Link
              key={employee.slug}
              to="/card/$slug"
              params={{ slug: employee.slug }}
              style={{ animationDelay: `${120 + i * 90}ms` }}
              className="tap-press animate-rise flex items-center gap-4 rounded-2xl border border-border bg-card p-3.5 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[var(--shadow-soft)]"
            >
              <img
                src={employee.image}
                alt={employee.name}
                width={768}
                height={768}
                loading="lazy"
                className="h-14 w-14 shrink-0 rounded-full object-cover object-top ring-2 ring-gold/50"
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate font-display text-base font-semibold text-navy">
                  {employee.name}
                </span>
                <span className="block truncate text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {employee.title}
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
}
