export type IconProps = React.HTMLAttributes<SVGElement>;
export type ProjectCategory =
  | "FRONTEND"
  | "BACKEND"
  | "FULL STACK"
  | "AI / ML"
  | "DATA SCIENCE"
  | "ARTIFICIAL INTELIGENCE"
  | "MACHINE LEARNING"
  | "CLOUD ENGINEERING"
  | "UI / UX"
  | "RESEARCH"
  | "DEVOPS"
  | "DATA ANALYTICS"
  | "DATA ANALYSIS"
  | "BIG DATA"
  | "COMPUTER VISION"
  | "ROBOTICS"
  | "SYSTEM ENGINEERING"
  | "MOBILE"
  | "WEB DEVELOPMENT"
  | "OPEN SOURCE"
  | "SECURITY"
  | "CYBERSECURITY"
  | "BLOCKCHAIN"
  | "CRYPTOGRAPHY"
  | "GAME DEVELOPMENT"
  | "EMBEDDED SYSTEMS"
  | "IOT"
  | "INTERNET OF THINGS"
  | "NLP"
  | "NATURAL LANGUAGE PROCESSING"
  | "OTHER";

export type ProjectStatus = "Live" | "In Progress" | "Archived";

export type Project = {
  title: string;
  description: string;
  /** Path or URL to the project's hero/thumbnail image */
  imgUrl: string;
  category: ProjectCategory;
  tags: string[];
  status?: ProjectStatus;
  /** Live demo URL */
  demo?: string;
  /** GitHub repository URL */
  github?: string;
  /** Optional: year or date range to display, e.g. "2024" or "2023–24" */
  year?: string;
  /** If true the card spans wider (featured/hero project) */
  featured?: boolean;
};

export type Skill = {
  title: string;
  icon: string;
  description?: string;
};

export type Experience = {
  fromDate: string;
  toDate: string;
  role: string;
  company: string;
  logo: string;
  description: string;
  tags?: string[];
  offerLetter?: string;
  certificate?: string;
};

export type Education = {
  logo: string;
  fromDate: string;
  toDate: string;
  course: string;
  institute: string;
  description?: string;
  tags?: string[];
  score?: string;
  certificate?: string;
};

export interface Testimonial {
  author: string;
  designation: string;
  linkedIn: string;
  quote: string;
  imgUrl: string;
}

export type Certificate = {
  issuer: string;
  issuerLogo: string;
  title: string;
  imgUrl: string;
  issuedAt: string;
  validity?: string;
};
