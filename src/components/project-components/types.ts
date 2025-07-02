export interface Project {
  id: string;
  slug: string;
  name: string;
  logo?: string;
  tagline: string;
  keyMetric: {
    label: string;
    value: string;
  };
  category: 'SaaS' | 'E-commerce' | 'FinTech' | 'EdTech' | 'HealthTech' | 'Entertainment' | 'Other';
  
  problem: string;
  solution: string;
  architecture?: {
    description: string;
    imageUrl?: string;
  };
  achievements: string[];
  role: string;
  responsibilities: string[];
  technologies: string[];
  lessonsLearned: string[];
  
  status: 'Active' | 'Sold' | 'Scaled' | 'Pivoted' | 'Maintenance';
  url?: string;
  color?: string; 
  featured?: boolean;
  startDate?: string;
  endDate?: string;
}