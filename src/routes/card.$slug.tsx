import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DigitalCard } from "@/components/card/DigitalCard";
import { LoadingScreen } from "@/components/card/LoadingScreen";
import { company, employees, getEmployee } from "@/data/employees";

export const Route = createFileRoute("/card/$slug")({
  loader: ({ params }) => {
    const employee = getEmployee(params.slug);
    if (!employee) throw notFound();
    return { employee };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Card unavailable — ABC Counsel" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { employee } = loaderData;
    const title = `${employee.name} — ${employee.title} | ${company.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: employee.description },
        { property: "og:title", content: title },
        { property: "og:description", content: employee.description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CardPage,
});

function CardPage() {
  const { employee } = Route.useLoaderData();
  const [cardUrl, setCardUrl] = useState<string | null>(null);

  useEffect(() => {
    setCardUrl(`${window.location.origin}/card/${employee.slug}`);
  }, [employee.slug]);

  if (!cardUrl) return <LoadingScreen />;

  return <DigitalCard employee={employee} cardUrl={cardUrl} />;
}
