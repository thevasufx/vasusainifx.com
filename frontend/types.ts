export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  cgpa: string;
  achievements: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Technical' | 'Soft' | 'Tools';
}

export interface AcademicMetric {
  subject: string;
  grade: number;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  skills?: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  academicMetrics: AcademicMetric[];
  certifications: Certification[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

