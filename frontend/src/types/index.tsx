export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
