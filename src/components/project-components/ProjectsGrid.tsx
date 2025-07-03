"use client"
import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ProjectFilters } from './ProjectFilters';
import type { Project } from './types';

interface ProjectsGridProps {
  projects: Project[];
  showFilters?: boolean;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ 
  projects, 
  showFilters = true 
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const project = projects.find(p => p.slug === hash);
        if (project) {
          setSelectedProject(project);
        }
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [projects]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    window.location.hash = project.slug;
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    window.location.hash = '';
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === filter));
    }
  };

  return (
    <>
      {showFilters && (
        <ProjectFilters
          categories={['All', ...Array.from(new Set(projects.map(p => p.category)))]}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project)}
            index={index}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
};