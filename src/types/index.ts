// Type definitions for the application

export type ThemeType = 'modern' | 'desi' | 'minimal';

export interface UserInfo {
  name: string;
  role: string;
  greeting: string;
}

export interface AboutInfo {
  aboutImg: string;
  experience: string;
  company: string;
  projects: string;
  aboutInfo: string;
}

export interface Skill {
  course: string;
  expertise: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  inProgress?: boolean;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface AppData {
  user: UserInfo;
  about: AboutInfo;
  skillsFrontend: Skill[];
  skillsBackend: Skill[];
  skillsAutomation: Skill[];
  projects: Project[];
  contact: ContactInfo;
}