import type { Experience } from "@/types";
import { ASSETS } from "./assets";

export const EXPERIENCE: Experience[] = [
  {
    fromDate: "07/21/2024",
    toDate: new Date().toLocaleDateString("en-US"),
    role: "Software Engineer",
    company: "NucleusTeq",
    logo: ASSETS.ICONS.LOGOS.NUCLEUSTEQ,
    offerLetter: ASSETS.IMAGES.EMPLOYMENT.NUCLEUSTEQ.OFFER_LETTER,
    certificate: ASSETS.IMAGES.EMPLOYMENT.NUCLEUSTEQ.SPARKLING_STAR_2025,
    description:
      "Managed a cross-functional team of 8 developers. Delivered award-winning enterprise CMS solutions for Fortune 500 clients. Implemented CI/CD pipelines that reduced deployment errors by 60%.",
    tags: ["Python", "AWS", "Django"],
  },
  {
    fromDate: "02/15/2024",
    toDate: "04/23/2024",
    role: "Software Engineer Trainee",
    company: "NucleusTeq",
    logo: ASSETS.ICONS.LOGOS.NUCLEUSTEQ,
    offerLetter: "",
    certificate: "",
    description:
      "Managed a cross-functional team of 8 developers. Delivered award-winning enterprise CMS solutions for Fortune 500 clients. Implemented CI/CD pipelines that reduced deployment errors by 60%.",
    tags: ["Python", "AWS", "Django"],
  },
  {
    fromDate: "07/10/2023",
    toDate: "08/10/2023",
    role: "Web Development and Designing Internship",
    company: "OASIS Infobyte",
    logo: ASSETS.ICONS.LOGOS.OASIS_INFOBYTE,
    offerLetter: ASSETS.IMAGES.EMPLOYMENT.OASIS_INFOBYTE.OFFER_LETTER,
    certificate: ASSETS.IMAGES.EMPLOYMENT.OASIS_INFOBYTE.INTERNSHIP_CERTIFICATE,
    description:
      "Managed a cross-functional team of 8 developers. Delivered award-winning enterprise CMS solutions for Fortune 500 clients. Implemented CI/CD pipelines that reduced deployment errors by 60%.",
    tags: ["React", "Node", "Express", "MongoDB", "Firebase"],
  },
];
