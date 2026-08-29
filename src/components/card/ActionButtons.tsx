import { Check, Download, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Employee } from "@/data/employees";
import { downloadVCard } from "@/lib/vcard";

export function ActionButtons({
  employee,
  cardUrl,
}: {
  employee: Employee;
  cardUrl: string;
}) {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    downloadVCard(employee, cardUrl);
    setSaved(true);
    toast.success("Contact file downloaded", {
      description: "Open it to add the contact to your phone.",
    });
    setTimeout(() => setSaved(false), 2500);
  };

  const handleShare = async () => {
    const data = {
      title: `${employee.name} — ${employee.title}`,
      text: `${employee.name}, ${employee.title} at ABC Counsel`,
      url: cardUrl,
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(cardUrl);
      toast.success("Card link copied to clipboard");
    } catch {
      toast.error("Could not share", { description: cardUrl });
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button
        onClick={handleSave}
        className="tap-press flex min-h-[56px] items-center justify-center gap-2.5 rounded-2xl bg-navy-gradient px-5 text-[0.95rem] font-semibold text-primary-foreground hover:-translate-y-0.5"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {saved ? (
          <Check className="h-[1.15rem] w-[1.15rem]" strokeWidth={2.2} />
        ) : (
          <Download className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
        )}
        Save Contact
      </button>
      <button
        onClick={handleShare}
        className="tap-press flex min-h-[56px] items-center justify-center gap-2.5 rounded-2xl border border-gold/45 bg-card px-5 text-[0.95rem] font-semibold text-navy hover:-translate-y-0.5 hover:border-gold"
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <Share2 className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
        Share Card
      </button>
    </div>
  );
}
