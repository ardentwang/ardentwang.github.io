import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.scss';

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>My Projects</h1>
      </header>

      <section className="projects-content">
        <div className="project-card">
          <h2>Project 1</h2>
          <p>Description for Project 1.</p>
        </div>
        <div className="project-card">
          <h2>Project 2</h2>
          <p>Description for Project 2.</p>
        </div>
        {/* Add more project cards as needed */}
      </section>
    </div>
  );
};

export default Projects;
