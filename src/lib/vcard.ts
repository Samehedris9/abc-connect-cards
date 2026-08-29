import { company, type Employee } from "@/data/employees";

export function buildVCard(employee: Employee, cardUrl: string) {
  const [first, ...rest] = employee.name.split(" ");
  const last = rest.join(" ");
  const phoneLines = employee.phones.map(
    (p) => `TEL;TYPE=CELL,VOICE:${p.number}`
  );
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${last};${first};;;`,
    `FN:${employee.name}`,
    `ORG:${company.name}`,
    `TITLE:${employee.title}`,
    ...phoneLines,
    `EMAIL;TYPE=INTERNET,WORK:${employee.email}`,
    `URL:${company.website}`,
    `URL;TYPE=LinkedIn:${employee.linkedin}`,
    `NOTE:${employee.description}`,
    `item1.URL:${cardUrl}`,
    "item1.X-ABLabel:Digital Card",
    "END:VCARD",
  ].join("\r\n");
}

export function downloadVCard(employee: Employee, cardUrl: string) {
  const blob = new Blob([buildVCard(employee, cardUrl)], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${employee.name.replace(/\s+/g, "-").toLowerCase()}-abc-counsel.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
