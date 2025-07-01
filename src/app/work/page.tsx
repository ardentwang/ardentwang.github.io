import React from 'react';
import Navbar from '@/components/Navbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const WorkHistory = () => {
  const workExperience = [
    {
      "id": 1,
      "title": "Quality Engineer",
      "company": "Moog Aircraft",
      "period": "May 2025 - Present",
      "description": "Currently working as a Quality Engineer intern at Moog Aircraft in Torrance, California.",
      "skills": [],
      "dotColor": "bg-red-800",
      "companyColor": "text-red-800",
      "logo": "/logos/moog.png",
      "logoFallback": "MA"
    },
    {
      "id": 2,
      "title": "Software Engineer",
      "company": "Moog Aircraft",
      "period": "Jun 2024 - Aug 2024",
      "description": "Engineered and deployed Python-based automation solutions for weekly data report generation and modification, reducing processing time from 102 minutes to 3 minutes—a 97% efficiency increase. Independently developed a prototype of a comprehensive full-stack solution using Next.js and Flask, with the intent of quick access to report automation capabilities.",
      "skills": ["Python", "Next.js", "Flask", "JavaScript", "Microsoft Excel"],
      "dotColor": "bg-red-800",
      "companyColor": "text-red-800",
      "logo": "/logos/moog.png",
      "logoFallback": "MA"
    },
    {
      "id": 3,
      "title": "Artificial Intelligence Researcher",
      "company": "University of Wisconsin-Madison",
      "period": "Sep 2023 - Jun 2024",
      "description": "Engaged in an intensive study focusing on the ethics of Artificial Intelligence decision-making processes, with a focus on Machine Learning processes. Explored multiple variables influencing AI outcomes, from core algorithms to external data biases. Conducted human research to gauge societal perceptions and trust in AI ethics.",
      "skills": ["Artificial Intelligence (AI)", "Machine Learning", "Python", "Human Subjects Research", "Statistical Data Analysis"],
      "dotColor": "bg-red-600",
      "companyColor": "text-red-600",
      "logo": "/logos/uwmadison.png",
      "logoFallback": "UW"
    },
    {
      "id": 4,
      "title": "Software Engineer",
      "company": "California ISO",
      "period": "May 2023 - Sep 2023",
      "description": "Conceptualized and developed a streamlined OASIS website using React for optimal user experience using dynamic rendering through a provided JSON data file, prioritizing rapid access to latest electric pricing data. Conducted solo technical demos for the software team, detailing code functionality and the website's rendering processes.",
      "skills": ["React.js", "CSS", "Express.js", "JavaScript"],
      "dotColor": "bg-green-600",
      "companyColor": "text-green-600",
      "logo": "/logos/caiso.png",
      "logoFallback": "CA"
    },
    {
      "id": 5,
      "title": "Computer Science Instructor",
      "company": "Juni Learning",
      "period": "Jan 2023 - May 2023",
      "description": "Experienced in teaching Python, Java, and JavaScript programming languages to students of all skill levels. Implemented hands-on, project-based learning approach to engage students and enhance their understanding of core concepts. Mentored students on individual projects and provided one-on-one support.",
      "skills": ["JavaScript", "Python", "Java", "HTML", "CSS"],
      "dotColor": "bg-purple-600",
      "companyColor": "text-purple-600",
      "logo": "/logos/juni.png",
      "logoFallback": "JL"
    },
    {
      "id": 6,
      "title": "Software Engineer",
      "company": "KeyMath",
      "period": "Jun 2022 - Nov 2022",
      "description": "Generated over 100,000 math questions in the K-12 range using Python3 in latex code formatting. Personally led an intern team that focused on ensuring math questions generated were relevant to each grade category, program correctness, and coding convention adherence.",
      "skills": ["Gitlab", "Software Development", "Project Planning", "Marketing Strategy", "Python"],
      "dotColor": "bg-orange-600",
      "companyColor": "text-orange-600",
      "logo": "/logos/keymath.png",
      "logoFallback": "KM"
    },
    {
      "id": 7,
      "title": "Data Engineer",
      "company": "University of California, Los Angeles",
      "period": "May 2019 - Aug 2019",
      "description": "Worked under Professor Pellegrini at the UCLA Department of Molecular, Cell and Developmental Biology. Created a PLS Regression algorithm using Python 3, using machine learning to identify biomarkers related to lifestyle risk factors. Transformed PLS algorithm results into accurate and precise graphs using matplotlib.",
      "skills": ["MATLAB", "Data Analysis", "Data Modeling", "Python"],
      "dotColor": "bg-yellow-600",
      "companyColor": "text-yellow-600",
      "logo": "/logos/ucla.png",
      "logoFallback": "UCLA"
    }
  ];

  return (
    <div>
      <Navbar/>
      <div className="max-w-4xl mx-auto p-6 mt-25">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          {workExperience.map((job, index) => (
            <div key={job.id} className="relative flex items-start mb-8 last:mb-0">
              {/* Timeline dot */}
              <div className={`absolute left-8 w-4 h-4 ${job.dotColor} rounded-full -translate-x-1/2 ring-4 ring-white`}></div>
              
              {/* Content */}
              <div className="ml-16 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <span className="text-sm text-gray-500 mt-1 sm:mt-0">{job.period}</span>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={job.logo} alt={job.company} />
                    <AvatarFallback className={`${job.companyColor} bg-opacity-10`}>
                      {job.logoFallback}
                    </AvatarFallback>
                  </Avatar>
                  <p className={`text-lg ${job.companyColor} font-medium`}>{job.company}</p>
                </div>
                
                <p className="text-gray-700 mb-4">{job.description}</p>
                
                {job.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;