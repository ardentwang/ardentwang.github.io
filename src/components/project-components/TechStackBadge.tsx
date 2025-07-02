import React from 'react';
import { Badge } from '@/components/ui/badge';

interface TechStackBadgeProps {
  tech: string;
  variant?: 'default' | 'secondary' | 'outline' | 'destructive';
}

// Optional: Define colors for specific technologies
const techColors: Record<string, string> = {
  'React': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'Next.js': 'bg-black/10 text-black dark:text-white border-black/20',
  'TypeScript': 'bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-600/20',
  'Node.js': 'bg-green-600/10 text-green-700 dark:text-green-300 border-green-600/20',
  'Python': 'bg-yellow-600/10 text-yellow-700 dark:text-yellow-300 border-yellow-600/20',
  'AWS': 'bg-orange-600/10 text-orange-700 dark:text-orange-300 border-orange-600/20',
  'PostgreSQL': 'bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 border-indigo-600/20',
  'MongoDB': 'bg-green-700/10 text-green-800 dark:text-green-200 border-green-700/20',
  // Add more as needed
};

export const TechStackBadge: React.FC<TechStackBadgeProps> = ({ 
  tech, 
  variant = 'outline' 
}) => {
  const customColor = techColors[tech];
  
  return (
    <Badge 
      variant={variant}
      className={customColor || 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}
    >
      {tech}
    </Badge>
  );
};