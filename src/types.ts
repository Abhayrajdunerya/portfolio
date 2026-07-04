export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category?: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  sourceUrl?: string;
};

export type Skill = {
  title: string;
  description: string;
  icon: unknown; // TODO - create type for icon
}

export type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  logo?: string;
}

export type Education = {
  id: string;
  period: string;
  degree: string;
  school: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  colorType?: 'primary' | 'secondary' | 'tertiary';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: string;
  iconName?: 'cloud' | 'shield' | 'terminal';
  accentColor?: 'primary' | 'secondary' | 'tertiary';
}