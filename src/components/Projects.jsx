import React, { useState, useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    image: '/path/to/project1.jpg',
    description: 'Description of Project 1',
    photos: ['/path/to/project1-1.jpg', '/path/to/project1-2.jpg'],
    link: 'https://example.com/project1',
  },
  // Add more projects as needed
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeOverlay = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('overlay')) {
        closeOverlay();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project"
          onClick={() => handleProjectClick(project)}
        >
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-title">{project.title}</div>
        </div>
      ))}

      {selectedProject && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={closeOverlay}>X</button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="photo-album">
              {selectedProject.photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Project ${index}`} className="project-photo" />
              ))}
            </div>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
