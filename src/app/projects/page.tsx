"use client"
import React from 'react';
import Navbar from "@/components/Navbar";
import { ProjectsGrid } from '@/components/project-components';
import type { Project } from '@/components/project-components';

const projects: Project[] = [
  {
    id: '1',
    slug: 'badger-bash',
    name: 'BadgerBash',
    tagline: 'Web-accessible multiplayer gaming platform built without heavy game engines',
    keyMetric: {
      label: 'Games Played',
      value: '300+'
    },
    category: 'Entertainment',
    problem: 'Traditional online multiplayer games require heavy game engines like Unity or Godot, making them resource-intensive and inaccessible on low-spec devices. This creates a barrier for casual gamers who want quick, accessible multiplayer experiences.',
    solution: 'Built a lightweight multiplayer gaming platform using only Next.js, Supabase, and Tailwind CSS. By leveraging Supabase\'s real-time subscriptions instead of traditional WebSockets, we created an efficient architecture that runs smoothly on low-CPU laptops while maintaining real-time gameplay.',
    technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    achievements: [
      'Achieved 100+ user signups with organic growth',
      'Successfully hosted 300+ multiplayer games',
      'Built entire platform without heavy game engines',
      'Optimized for low-CPU devices while maintaining smooth gameplay',
      'Created efficient real-time sync using minimal resources'
    ],
    role: 'Founding Full-Stack Software Engineer',
    responsibilities: [
      'Architected lightweight multiplayer game infrastructure',
      'Implemented real-time game state synchronization',
      'Optimized rendering pipeline for performance',
      'Designed efficient database subscription model',
      'Built responsive game UI with Tailwind CSS'
    ],
    lessonsLearned: [
      'Supabase subscriptions can effectively replace WebSockets for specific use cases, reducing complexity',
      'Careful architecture design is crucial - minimizing table subscriptions dramatically improves performance',
      'React hooks can efficiently manage game state when properly structured',
      'Sometimes the most impressive solution is the simplest one - avoiding heavy frameworks can be a strength',
      'Low-spec accessibility opens up gaming to a much wider audience'
    ],
    status: 'Active',
    color: '#8B5CF6',
    url: 'https://www.badger-bash.com',
    startDate: 'January 2025',
    featured: true
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#ca2a2a] transition-colors">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[#ff7979] dark:text-[#342e2e]">My</span>
            <span className="text-[#2d2d2d] dark:text-white"> Projects</span>
          </h1>
          <p className="text-xl text-[#2d2d2d]/70 dark:text-white/70 max-w-3xl mx-auto">
            A collection of businesses and products I've built from the ground up. 
            Each project represents months of problem-solving, technical challenges, and real impact.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#ff7979] dark:text-[#ff7979]">3</p>
              <p className="text-sm text-[#2d2d2d]/60 dark:text-white/60 mt-1">Active Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#ff7979] dark:text-[#ff7979]">$1.1K+</p>
              <p className="text-sm text-[#2d2d2d]/60 dark:text-white/60 mt-1">Monthly Revenue</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#ff7979] dark:text-[#ff7979]">500+</p>
              <p className="text-sm text-[#2d2d2d]/60 dark:text-white/60 mt-1">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#ff7979] dark:text-[#ff7979]">2023</p>
              <p className="text-sm text-[#2d2d2d]/60 dark:text-white/60 mt-1">Started Journey</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </div>
  );
}