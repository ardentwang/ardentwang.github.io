"use client"
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from './types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  onClick,
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-[#342e2e] overflow-hidden">
        <div 
          className="h-1 w-full"
          style={{ 
            background: project.color || 'linear-gradient(to right, #ff7979, #ff5757)' 
          }}
        />
        
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              {project.logo ? (
                <img 
                  src={project.logo} 
                  alt={`${project.name} logo`}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              ) : (
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: project.color || '#ff7979' }}
                >
                  {project.name.charAt(0)}
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-[#2d2d2d] dark:text-white group-hover:text-[#ff7979] dark:group-hover:text-[#ff7979] transition-colors">
                  {project.name}
                </h3>
                <Badge variant="secondary" className="mt-1 text-xs">
                  {project.category}
                </Badge>
              </div>
            </div>
            <Badge 
              variant={project.status === 'Active' ? 'default' : 'outline'}
              className="text-xs"
            >
              {project.status}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-[#2d2d2d]/70 dark:text-white/70 text-sm line-clamp-2">
            {project.tagline}
          </p>
          
          <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-lg p-4 border border-gray-200 dark:border-[#342e2e]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-[#ff7979] dark:text-[#ff7979]">
                  {project.keyMetric.value}
                </p>
                <p className="text-xs text-[#2d2d2d]/60 dark:text-white/60 mt-1">
                  {project.keyMetric.label}
                </p>
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="text-xs border-[#ff7979]/30 dark:border-[#342e2e]/30"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge 
                variant="outline" 
                className="text-xs border-[#ff7979]/30 dark:border-[#342e2e]/30"
              >
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium text-[#ff7979] dark:text-[#ff7979]">
              View Case Study
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#ff7979] dark:text-[#ff7979]" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};