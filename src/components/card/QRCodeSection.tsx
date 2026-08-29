import { useEffect, useState } from "react";
import QRCode from "qrcode";

export function QRCodeSection({ url }: { url: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    QRCode.toDataURL(url, {
      width: 720,
      margin: 1,
      errorCorrectionLevel: "M",
      color: { dark: "#0B1F3A", light: "#FFFFFF" },
    })
      .then((data) => active && setSrc(data))
      .catch(() => active && setSrc(null));
    return () => {
      active = false;
    };
  }, [url]);

  return (
    <section className="text-center">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Scan to save contact
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="mt-6 flex justify-center">
        <div
          className="rounded-3xl border border-border bg-card p-4"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          {src ? (
            <img
              src={src}
              alt="QR code linking to this digital business card"
              width={220}
              height={220}
              className="h-[220px] w-[220px] rounded-xl"
            />
          ) : (
            <div className="h-[220px] w-[220px] animate-pulse rounded-xl bg-muted" />
          )}
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">Add me to your contacts</p>
    </section>
  );
}
