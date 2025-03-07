import React, { useState, useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'AWS Scalable Gaming Server',
    image: '/pixelmon.png',
    description: 'In this project, I accomplished the hosting of a dynamically scalable Minecraft server using Amazon Web Services infrastructure, specifically AWS S3 and EC2 instances, with the aid of the Command Line Interface (CLI). This ambitious endeavor showcased my proficiency in cloud computing as I leveraged S3 for data storage, ensuring seamless world backups and configuration files management, while EC2 instances were employed for flexible server hosting that could be easily adjusted to accommodate varying player loads. ',
    photos: ['/server_image.png',],
    link: '',
  },
  {
    title: 'Personal VPN Server',
    image: '/vpn.jpg',
    description: 'For my first cloud project I created a VPN infrastructure utilizing Amazon Web Services EC2 instances and the AWS AMI Marketplace. This venture was a valuable learning experience, enabling me to gain fundamental knowledge of connecting to and managing EC2 instances across multiple regions, while delving into the essentials of AWS services. Through this project, I honed my skills in configuring and maintaining virtual private networks. ',
    photos: [],
    link: '',
  },
  {
    title: 'Old Portfolio Website',
    image: '/website.jpg',
    description: 'This was a project I did to showcase my skills and projects at the start of college. I used HTML and CSS to create the static website and hosted it through an S3 bucket on the AWS cloud. I learned a lot about hosting websites in the AWS cloud and how to use several services like S3, Route 53, EC2, and IAM.',
    photos: ['/website-image-1.png', '/website-image-2.png'],
    link: 'https://zacharywitte.com.s3.amazonaws.com/index.html',
  },
  // Add more projects as needed
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentPhotoIndex(0); // Reset photo index when a new project is selected
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

  useEffect(() => {
    if (selectedProject && selectedProject.photos.length > 0) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) =>
          (prevIndex + 1) % selectedProject.photos.length
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [selectedProject]);

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
            <div>
              <button className="close-button" onClick={closeOverlay}>X</button>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
            <div className="photo-album">
              {selectedProject.photos.length > 0 && (
                <img
                  src={selectedProject.photos[currentPhotoIndex]}
                  alt={`Project ${currentPhotoIndex}`}
                  className="project-photo"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
