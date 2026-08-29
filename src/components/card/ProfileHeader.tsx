import type { Employee } from "@/data/employees";

export function ProfileHeader({ employee }: { employee: Employee }) {
  return (
    <section className="relative overflow-hidden rounded-t-[calc(var(--radius)+10px)] bg-navy-gradient px-6 pb-8 pt-9 text-center">
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full opacity-[0.16]"
        style={{ background: "var(--gradient-gold)", filter: "blur(10px)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full opacity-[0.1]"
        style={{ background: "var(--gradient-gold)", filter: "blur(14px)" }}
        aria-hidden
      />

      <div className="relative mx-auto animate-pop">
        <div
          className="mx-auto grid h-32 w-32 place-items-center rounded-full p-[3px]"
          style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          <img
            src={employee.image}
            alt={`${employee.name}, ${employee.title}`}
            width={768}
            height={768}
            className="h-full w-full rounded-full object-cover object-top ring-4 ring-navy-deep/40"
          />
        </div>
      </div>

      <div className="relative mt-5 animate-rise [animation-delay:120ms]">
        <h1 className="font-display text-[1.65rem] font-semibold leading-tight tracking-tight text-primary-foreground">
          {employee.name}
        </h1>
        <p className="mt-1.5 text-sm font-medium uppercase tracking-[0.14em] text-gold-soft">
          {employee.title}
        </p>
        <p className="mx-auto mt-4 max-w-sm text-[0.9rem] leading-relaxed text-primary-foreground/70">
          {employee.description}
        </p>
      </div>
    </section>
  );
}
