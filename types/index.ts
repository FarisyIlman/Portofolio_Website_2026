export type SkillCategory = 
  | 'Languages' 
  | 'Frontend' 
  | 'Backend' 
  | 'Machine Learning' 
  | 'DevOps' 
  | 'UI/UX' 
  | 'Embedded Systems'
  | 'Database'
  | 'IoT & Hardware';

export type TabCategory = 'All' | SkillCategory;

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Skill {
  name: string;
  level: SkillLevel; // Disesuaikan menjadi 'Beginner' | 'Intermediate' | 'Advanced'
  percentage?: number;
  category: SkillCategory;
}

export interface Project {
  slug: string;
  title: string;
  category: 'Web Development' | 'Machine Learning' | 'Data Science' | 'IoT / Embedded' | 'UI/UX' | 'Security';
  shortDescription: string;
  detailedDescription: string;
  problemStatement: string;
  solution: string;
  role: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface TimelineEvent {
  id: string;
  type: 'experience' | 'leadership' | 'education';
  title: string;
  subtitle: string;
  period: string;
  responsibilities: string[];
  highlights?: string[];
}

// Global UI tracking map for scroll orchestrator background transitions
export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'education' | 'experience' | 'vision' | 'contact';