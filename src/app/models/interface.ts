export interface NavItem {
  label: string;
  link: string;
}

export interface Language {
  name: string;
  code: string;
  flag: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  details: string[];
  tech: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsData {
  languages: string;
  frameworks: string;
  databases: string;
  tools: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
