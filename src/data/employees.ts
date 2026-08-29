import haggagPhoto from "@/assets/haggag.jpg";
import elgendyPhoto from "@/assets/elgendy.jpg";

export const company = {
  name: "ABC Counsel",
  tagline: "Business & Technology Consulting",
  linkedin: "https://linkedin.com/company/abc-counsel",
  website: "https://abccounsel.com",
};

export type Phone = {
  label: string;
  number: string;
  display: string;
  whatsapp: string;
};

export type Employee = {
  slug: string;
  name: string;
  title: string;
  description: string;
  phones: Phone[];
  email: string;
  linkedin: string;
  image: string;
};

export const employees: Employee[] = [
  {
    slug: "mohamed-haggag",
    name: "Mohamed Haggag",
    title: "Senior Business Consultant",
    description:
      "Helping businesses streamline operations and grow with Microsoft Dynamics 365 Business Central.",
    phones: [
      {
        label: "EG",
        number: "+201003379052",
        display: "+20 100 337 9052",
        whatsapp: "201003379052",
      },
      {
        label: "KSA",
        number: "+966545864978",
        display: "+966 54 586 4978",
        whatsapp: "966545864978",
      },
    ],
    email: "m.hagag@abccounsel.com",
    linkedin: "https://linkedin.com/",
    image: haggagPhoto,
  },
  {
    slug: "mohamed-elgendy",
    name: "Mohamed Elgendy",
    title: "Managing Director",
    description:
      "Delivering strategic business consulting and technology solutions that drive measurable growth.",
    phones: [
      {
        label: "EG",
        number: "+201000444382",
        display: "+20 100 044 4382",
        whatsapp: "201000444382",
      },
      {
        label: "KSA",
        number: "+966545004578",
        display: "+966 54 500 4578",
        whatsapp: "966545004578",
      },
    ],
    email: "m.elgendy@abccounsel.com",
    linkedin: "https://linkedin.com/",
    image: elgendyPhoto,
  },
];

export const getEmployee = (slug: string) => employees.find((e) => e.slug === slug);
