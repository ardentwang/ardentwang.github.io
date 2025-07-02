"use client"
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Calendar, User, Lightbulb, Code, Trophy, X } from 'lucide-react';
import { TechStackBadge } from './TechStackBadge';
import type { Project } from './types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  isOpen, 
  onClose 
}) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b border-gray-200 dark:border-[#342e2e]">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {project.logo ? (
                <img 
                  src={project.logo} 
                  alt={`${project.name} logo`}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              ) : (
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: project.color || '#ff7979' }}
                >
                  {project.name.charAt(0)}
                </div>
              )}
              <div>
                <DialogTitle className="text-2xl font-bold text-[#2d2d2d] dark:text-white">
                  {project.name}
                </DialogTitle>
                <p className="text-[#2d2d2d]/70 dark:text-white/70 mt-1">
                  {project.tagline}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <Badge 
                    variant={project.status === 'Active' ? 'default' : 'outline'}
                  >
                    {project.status}
                  </Badge>
                  {project.startDate && (
                    <span className="text-xs text-[#2d2d2d]/60 dark:text-white/60 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.startDate} - {project.endDate || 'Present'}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {project.url && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.url, '_blank')}
                className="gap-2"
              >
                Visit Site
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>
        </DialogHeader>

        <div className="my-6 bg-gradient-to-r from-[#ff7979]/10 to-[#ff5757]/10 dark:from-[#342e2e]/20 dark:to-[#342e2e]/10 rounded-lg p-6 border border-[#ff7979]/20 dark:border-[#342e2e]/30">
          <p className="text-3xl font-bold text-[#ff7979] dark:text-[#ff7979]">
            {project.keyMetric.value}
          </p>
          <p className="text-sm text-[#2d2d2d]/70 dark:text-white/70 mt-1">
            {project.keyMetric.label}
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="learnings">Learnings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2d2d2d] dark:text-white mb-3 flex items-center gap-2">
                <User className="w-5 h-5 text-[#ff7979]" />
                My Role
              </h3>
              <p className="text-[#2d2d2d]/70 dark:text-white/70">
                {project.role}
              </p>
              <ul className="mt-3 space-y-2">
                {project.responsibilities.map((resp, index) => (
                  <li key={index} className="text-sm text-[#2d2d2d]/70 dark:text-white/70 flex items-start gap-2">
                    <span className="text-[#ff7979] mt-1">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2d2d2d] dark:text-white mb-3">
                The Problem
              </h3>
              <p className="text-[#2d2d2d]/70 dark:text-white/70">
                {project.problem}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2d2d2d] dark:text-white mb-3">
                The Solution
              </h3>
              <p className="text-[#2d2d2d]/70 dark:text-white/70">
                {project.solution}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="technical" className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2d2d2d] dark:text-white mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-[#ff7979]" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechStackBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>

            {project.architecture && (
              <div>
                <h3 className="text-lg font-semibold text-[#2d2d2d] dark:text-white mb-3">
                  Architecture Overview
                </h3>
                <p className="text-[#2d2d2d]/70 dark:text-white/70 mb-4">
                  {project.architecture.description}
                </p>
                {project.architecture.imageUrl && (
                  <img 
                    src={project.architecture.imageUrl} 
                    alt="Architecture diagram"
                    className="w-full rounded-lg border border-gray-200 dark:border-[#342e2e]"
                  />
                )}
              </div>
            )}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2d2d2d] dark:text-white mb-3 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#ff7979]" />
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#ff7979] font-bold mt-0.5">
                      {index + 1}.
                    </span>
                    <p className="text-[#2d2d2d]/70 dark:text-white/70">
                      {achievement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="learnings" className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2d2d2d] dark:text-white mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#ff7979]" />
                Lessons Learned
              </h3>
              <ul className="space-y-3">
                {project.lessonsLearned.map((lesson, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#ff7979] mt-0.5">💡</span>
                    <p className="text-[#2d2d2d]/70 dark:text-white/70">
                      {lesson}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};