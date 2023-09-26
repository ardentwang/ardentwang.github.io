// Projects.js
import React from 'react';
import Project from '../../components/project.js'; // Import the new component
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.scss';
import amazonImage from '../../assets/images/amazon.png';
import covidImage from '../../assets/images/covid.png';

const Projects = () => {
  const projectData = [
    { 
      image: amazonImage, 
      title: 'Amazon Clone', 
      description: 'The Amazon Clone website aims to replicate the key functionalities and design aspects of the original Amazon platform. Built with the end-user in mind, this clone provides a shopping experience that aims to mirrors the simplistic portions Amazon.com. ',
      link: 'https://atwang-amzclone.web.app'
    },
    { 
      image: covidImage, 
      title: 'COVID-19 Tracker', 
      description: 'The Global COVID-19 Tracker is a React-based web application designed to provide real-time, reliable statistics on the COVID-19 pandemic, focusing specifically on the number of deaths and infections in each country. Utilizing a clean, user-friendly interface, the application integrates data from reputable sources to offer a comprehensive view of the pandemic\'s global impact. ',
      link: 'https://california-covid-19-tracker.web.app/'
    },
  ];

  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>My Projects</h1>
      </header>

      <section className="projects-content">
        {projectData.map((proj, index) => (
          <Project
            key={index}
            image={proj.image}
            title={proj.title}
            description={proj.description}
            link={proj.link}  // Pass the link prop here
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
