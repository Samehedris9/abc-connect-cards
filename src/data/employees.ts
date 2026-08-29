import ahmedPhoto from "@/assets/ahmed.jpg";
import omarPhoto from "@/assets/omar.jpg";

export const company = {
  name: "ABC Counsel",
  tagline: "Business & Technology Consulting",
  linkedin: "https://linkedin.com/company/abc-counsel",
  website: "https://abccounsel.com",
};

export type Employee = {
  slug: string;
  name: string;
  title: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  linkedin: string;
  image: string;
};

export const employees: Employee[] = [
  {
    slug: "employee-1",
    name: "Ahmed Mohamed",
    title: "Business Central Consultant",
    description:
      "Helping businesses streamline operations and grow with Microsoft Dynamics 365 Business Central.",
    phone: "+201000000000",
    phoneDisplay: "+20 100 000 0000",
    whatsapp: "201000000000",
    email: "ahmed@abccounsel.com",
    linkedin: "https://linkedin.com/",
    image: ahmedPhoto,
  },
  {
    slug: "employee-2",
    name: "Omar Hassan",
    title: "Technical Consultant",
    description:
      "Delivering smart technical solutions and professional support for Business Central and ERP systems.",
    phone: "+201100000000",
    phoneDisplay: "+20 110 000 0000",
    whatsapp: "201100000000",
    email: "omar@abccounsel.com",
    linkedin: "https://linkedin.com/",
    image: omarPhoto,
  },
];

export const getEmployee = (slug: string) => employees.find((e) => e.slug === slug);
