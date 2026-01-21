export interface Project {
  id: number;
  name: string;
  description: string;
  liveLink: string;
  image?: string;
  tags?: string[]
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export type CodeToken = {
  text: string;
  color: string;
  newLine?: boolean;
  indent?: number;
};
export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}