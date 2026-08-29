import { BrandMark } from "./BrandHeader";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background">
      <div className="flex animate-rise flex-col items-center gap-4">
        <BrandMark size={56} />
        <div className="h-[3px] w-28 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full w-1/2 rounded-full"
            style={{
              background: "var(--gradient-gold)",
              animation: "rise-in 0.9s ease-in-out infinite alternate",
            }}
          />
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Loading Digital Card...
        </p>
      </div>
    </div>
  );
}
