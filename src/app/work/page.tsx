import React from 'react';
import Navbar from '@/components/Navbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const WorkHistory = () => {
  const workExperience = [
    {
      "id": 1,
      "title": "Software Engineer",
      "company": "BNY",
      "period": "Sep 2025 - Present",
      "description": "Achieved 81% code coverage across 108 NUnit tests on C#/.NET Razor Pages, leveraging Moq for dependency isolation. Designed and executed a disaster recovery workflow via OneDesk to validate application failover and recovery procedures. Developing an API wrapper to standardize Splunk log ingestion across teams, reducing query inefficiency and lowering observability costs.",
      "skills": ["C#", ".NET", "NUnit", "Moq", "Splunk"],
      "dotColor": "bg-blue-700",
      "companyColor": "text-blue-700",
      "logo": "/logos/bny.png",
      "logoFallback": "BNY"
    },
    {
      "id": 2,
      "title": "Full-Stack Software Engineer Intern",
      "company": "Moog Inc.",
      "period": "Jun 2024 - Aug 2025",
      "description": "Personally initiated meetings with functionality managers to understand existing issues and executed effective solutions through an Agile project management methodology, eliminating up to 8 hours of daily data silos. Built a PDF-to-QR-code generator in React for digital storage of calibration certifications. Created semi-automated reporting software with Python tkinter GUIs, making data entry 5.3x faster. Engineered local automation cell data transfer from SQL databases to enterprise via Ignition. Developed a centralized Report Automation intranet site using React and Flask.",
      "skills": ["Python", "React", "Flask", "Next.js", "JavaScript", "SQL"],
      "dotColor": "bg-red-800",
      "companyColor": "text-red-800",
      "logo": "/logos/moog.png",
      "logoFallback": "MI"
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
      "title": "Full-Stack Software Engineering Intern",
      "company": "California ISO",
      "period": "May 2023 - Sep 2023",
      "description": "Designed and developed an intranet React + Express.js site focused on real-time data retrieval with modern UI design, improving electric price grid fetch time for stakeholders by 480%.",
      "skills": ["React.js", "Express.js", "JavaScript", "CSS"],
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
      "description": "Generated over 100,000 math questions in the K-12 range using Python3 in LaTeX code formatting. Personally led an intern team focused on ensuring math questions were relevant to each grade category, program correctness, and coding convention adherence.",
      "skills": ["Python", "Software Development", "Project Planning"],
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
      "description": "Worked under Professor Pellegrini at the UCLA Department of Molecular, Cell and Developmental Biology. Created a PLS Regression algorithm using Python 3 to identify biomarkers related to lifestyle risk factors using machine learning. Visualized results with matplotlib.",
      "skills": ["Python", "MATLAB", "Data Analysis", "Data Modeling"],
      "dotColor": "bg-yellow-600",
      "companyColor": "text-yellow-600",
      "logo": "/logos/ucla.png",
      "logoFallback": "UCLA"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#ca2a2a] transition-colors">
      <Navbar/>
      <div className="max-w-4xl mx-auto p-6 mt-25">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Work Experience</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-[#342e2e]"></div>

          {workExperience.map((job) => (
            <div key={job.id} className="relative flex items-start mb-8 last:mb-0">
              {/* Timeline dot */}
              <div className={`absolute left-8 w-4 h-4 ${job.dotColor} rounded-full -translate-x-1/2 ring-4 ring-white dark:ring-[#ca2a2a]`}></div>

              {/* Content */}
              <div className="ml-16 bg-white dark:bg-[#342e2e] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-white/60 mt-1 sm:mt-0">{job.period}</span>
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

                <p className="text-gray-700 dark:text-white/70 mb-4">{job.description}</p>

                {job.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 dark:bg-[#ca2a2a]/30 dark:text-[#ff7979] rounded-full"
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