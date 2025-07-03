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
      value: '300+',
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
    featured: true,
    heroImage: '/project-images/badgerbash.png'
  },
  {
    id: '2',
    slug: 'buyhome-pro',
    name: 'BuyHomePro',
    tagline: 'AI-powered real estate platform connecting agents and buyers with intelligent property insights',
    keyMetric: {
      label: 'Value Saved',
      value: '$1,000,000+'
    },
    category: 'SaaS',
    problem: 'Real estate agents struggled to provide instant, accurate property insights to clients, while buyers needed quick answers about listings outside of business hours. Traditional methods required manual research and delayed responses.',
    solution: 'Developed an AI-powered platform where agents can refer clients for instant property valuations, market insights, and appointment scheduling. Integrated ChatGPT to answer property-specific questions using our curated real estate data.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'OpenAI API', 'REST APIs', 'Tailwind CSS'],
    achievements: [
      'Partnered with independent real estate agents',
      'Generated commission revenue through successful referrals',
      'Reduced agent response time from hours to seconds',
      'Improved AI with only necessary context prompting',
      'Created seamless appointment scheduling system'
    ],
    role: 'Founding Full-Stack Software Engineer',
    responsibilities: [
      'Architected scalable platform with TypeScript and Prisma',
      'Integrated OpenAI API for intelligent property Q&A',
      'Built agent referral and commission tracking system',
      'Implemented real-time property data synchronization',
      'Designed user authentication and authorization flows'
    ],
    lessonsLearned: [
      'B2B2C models require balancing needs of both agents and end users',
      'AI context windows need careful management for accurate property insights',
      'Commission-based revenue requires strong agent relationships and trust',
      'Real estate data integration is complex but crucial for accuracy',
      'Appointment scheduling needs to sync with multiple calendar systems'
    ],
    status: 'Active',
    color: '#10B981',
    url: 'https://www.buyhome.pro',
    startDate: 'March 2024',
    featured: true,
    heroImage: '/project-images/buyhomepro.png'
  }, 
  {
    id: '3',
    slug: 'ai-admits',
    name: 'AI Admits',
    tagline: 'AI-powered college application platform delivering Ivy League-level admissions guidance',
    keyMetric: {
      label: 'Monthly Recurring Revenue',
      value: '$1.1K+ MRR'
    },
    category: 'EdTech',
    problem: 'College applicants struggle with generic essay advice, expensive consultants charging $500+/hour, and lack of personalized guidance. Most students can\'t afford quality admissions counseling, putting them at a disadvantage.',
    solution: 'Built an AI platform that democratizes access to elite college admissions expertise. Provides personalized essay brainstorming, real-time reviews with detailed feedback, scoring algorithms, and tailored school/major recommendations at a fraction of traditional consulting costs.',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'Stripe', 'Vercel', 'Tailwind CSS'],
    achievements: [
      'Grew to 400+ registered users organically',
      'Achieved $1,100+ monthly recurring revenue',
      'Helped students get into top 20 universities',
      'Reduced essay revision time from days to minutes',
      'Partnered with Dean of Harvard Graduate Admissions'
    ],
    role: 'Co-Founding Full-Stack Software Engineer',
    responsibilities: [
      'Architected AI-powered essay analysis system',
      'Implemented subscription billing with Stripe',
      'Built real-time essay scoring algorithms',
      'Developed personalized recommendation engine',
      'Created intuitive UI for complex application process'
    ],
    lessonsLearned: [
      'Education technology requires balancing AI assistance with authentic student voice',
      'Subscription pricing must reflect value while remaining accessible to students',
      'User onboarding is crucial - college apps are already stressful enough',
      'AI prompts need careful tuning to provide constructive, not generic feedback',
      'Building trust with parents is as important as engaging students'
    ],
    status: 'Active',
    color: '#F59E0B',
    url: 'https://www.aiadmits.com',
    startDate: 'October 2023',
    featured: true,
    heroImage: '/project-images/aiadmits.png'
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
            A collection of businesses and products I&#39;ve built from the ground up. 
            Each project represents months of problem-solving, technical challenges, and real impact.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#ff7979] dark:text-[#ff7979]">3</p>
              <p className="text-sm text-[#2d2d2d]/60 dark:text-white/60 mt-1">Active Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#ff7979] dark:text-[#ff7979]">$5.1K+*</p>
              <p className="text-sm text-[#2d2d2d]/60 dark:text-white/60 mt-1">Monthly Revenue</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#ff7979] dark:text-[#ff7979]">600+</p>
              <p className="text-sm text-[#2d2d2d]/60 dark:text-white/60 mt-1">Total Active Users</p>
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

      <section className="py-16 px-6 bg-gray-50 dark:bg-[#ca2a2a]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2d2d2d] dark:text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-[#2d2d2d]/70 dark:text-white/70 mb-8">
            I&#39;m always open to discussing new projects and opportunities.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#ff7979] dark:bg-[#342e2e] rounded-full text-white dark:text-[#ca2a2a] font-semibold hover:scale-105 transition-transform shadow-xl shadow-[#ff7979]/25 dark:shadow-[#342e2e]/25"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}