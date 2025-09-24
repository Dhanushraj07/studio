export type NavLink = {
  href: string;
  label: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  links: {
    github: string;
    linkedin: string;
  };
  navLinks: NavLink[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type Internship = {
  role: string;
  company: string;
  period: string;
};

export type AboutData = {
  summary: string;
  education: Education[];
  internship: Internship[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
};

export type Skill = {
  [key: string]: string[];
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  demo?: string;
};

export type Achievement = {
  title: string;
  description: string;
};
