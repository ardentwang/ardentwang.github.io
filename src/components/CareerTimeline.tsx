"use client"
import React, { useState } from 'react';
import './CareerTimeline.css';

interface CareerEvent {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  achievements: string[];
  companyColor: string;
  companyLogo?: string;
}

interface CareerTimelineProps {
  events?: CareerEvent[];
}

const defaultEvents: CareerEvent[] = [
  {
    id: '1',
    company: 'Google',
    position: 'Senior Software Engineer',
    startDate: '2022',
    endDate: 'Present',
    description: 'Leading development of cloud infrastructure solutions and mentoring junior developers.',
    technologies: ['React', 'TypeScript', 'Go', 'Kubernetes'],
    achievements: [
      'Reduced system latency by 40%',
      'Led team of 8 engineers',
      'Launched 3 major features'
    ],
    companyColor: '#4285F4'
  },
  {
    id: '2',
    company: 'Microsoft',
    position: 'Software Engineer II',
    startDate: '2020',
    endDate: '2022',
    description: 'Developed enterprise applications and collaborated with cross-functional teams.',
    technologies: ['C#', '.NET', 'Azure', 'SQL Server'],
    achievements: [
      'Improved performance by 60%',
      'Mentored 5 junior developers',
      'Delivered projects ahead of schedule'
    ],
    companyColor: '#00A4EF'
  },
  {
    id: '3',
    company: 'Spotify',
    position: 'Frontend Developer',
    startDate: '2018',
    endDate: '2020',
    description: 'Built user-facing features for music streaming platform with millions of users.',
    technologies: ['JavaScript', 'React', 'Redux', 'Node.js'],
    achievements: [
      'Increased user engagement by 25%',
      'Optimized bundle size by 30%',
      'Implemented accessibility features'
    ],
    companyColor: '#1DB954'
  },
  {
    id: '4',
    company: 'Startup Inc',
    position: 'Full Stack Developer',
    startDate: '2016',
    endDate: '2018',
    description: 'Wore multiple hats in fast-paced startup environment, building product from ground up.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'React'],
    achievements: [
      'Built MVP from scratch',
      'Acquired first 1000 users',
      'Reduced infrastructure costs by 50%'
    ],
    companyColor: '#FF6B6B'
  }
];

const CareerTimeline: React.FC<CareerTimelineProps> = ({ events = defaultEvents }) => {
  console.log('CareerTimeline component: Starting to render');
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [, setHoveredEvent] = useState<string | null>(null);

  // Debug logs
  console.log('CareerTimeline: Received events prop:', events);
  console.log('CareerTimeline: Events length:', events.length);
  console.log('CareerTimeline: Using default events?', events === defaultEvents);
  console.log('CareerTimeline: First event company:', events[0]?.company);

  return (
    <div className="career-timeline">
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <div className="timeline-events">
          {events.map((event) => (
            <div
              key={event.id}
              className={`timeline-event ${activeEvent === event.id ? 'active' : ''}`}
              style={{ '--company-color': event.companyColor } as React.CSSProperties}
              onMouseEnter={() => {
                console.log('Mouse enter:', event.company);
                setHoveredEvent(event.id);
              }}
              onMouseLeave={() => {
                console.log('Mouse leave:', event.company);
                setHoveredEvent(null);
              }}
              onClick={() => {
                console.log('Click:', event.company);
                setActiveEvent(activeEvent === event.id ? null : event.id);
              }}
            >
              <div className="event-dot"></div>
              
              <div className="event-card">
                <h3>{event.company}</h3>
                <h4>{event.position}</h4>
                <div className="event-date">
                  {event.startDate} - {event.endDate}
                </div>
                <p className="event-description">{event.description}</p>
                
                <div className="event-technologies">
                  {event.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <ul className="event-achievements">
                  {event.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="timeline-year">
                {event.startDate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTimeline;