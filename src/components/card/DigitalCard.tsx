import { Building2, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { company, type Employee } from "@/data/employees";
import { BrandHeader } from "./BrandHeader";
import { ProfileHeader } from "./ProfileHeader";
import { ContactButton } from "./ContactButton";
import { ActionButtons } from "./ActionButtons";
import { QRCodeSection } from "./QRCodeSection";
import { Footer } from "./Footer";

export function DigitalCard({
  employee,
  cardUrl,
}: {
  employee: Employee;
  cardUrl: string;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-2">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-[0.06]"
        style={{ background: "var(--gradient-navy)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-40 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-[0.07]"
        style={{ background: "var(--gradient-gold)", filter: "blur(90px)" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[460px]">
        <BrandHeader />

        <article
          className="surface-card animate-rise overflow-hidden rounded-[calc(var(--radius)+10px)]"
          style={{ borderRadius: "calc(var(--radius) + 10px)" }}
        >
          <ProfileHeader employee={employee} />

          <div className="space-y-7 px-4 py-7 sm:px-6">
            <div className="animate-rise space-y-2.5 [animation-delay:200ms]">
              <ContactButton
                icon={Phone}
                label="Call"
                value={employee.phoneDisplay}
                href={`tel:${employee.phone}`}
              />
              <ContactButton
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat on WhatsApp"
                href={`https://wa.me/${employee.whatsapp}`}
                external
              />
              <ContactButton
                icon={Mail}
                label="Email"
                value={employee.email}
                href={`mailto:${employee.email}`}
              />
              <ContactButton
                icon={Linkedin}
                label="LinkedIn"
                value="Personal profile"
                href={employee.linkedin}
                external
              />
              <ContactButton
                icon={Building2}
                label="Company"
                value={`${company.name} on LinkedIn`}
                href={company.linkedin}
                external
              />
            </div>

            <div className="animate-rise [animation-delay:280ms]">
              <ActionButtons employee={employee} cardUrl={cardUrl} />
            </div>

            <div className="animate-rise [animation-delay:360ms]">
              <QRCodeSection url={cardUrl} />
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
