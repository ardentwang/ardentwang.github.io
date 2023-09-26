// Project.js
import React from 'react';
import PropTypes from 'prop-types';
import './project.scss';

const Project = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title}-image`} className="project-image" />
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="project-link">
        <a href={link} target="_blank" rel="noopener noreferrer">Website</a>
      </div>
    </div>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;
