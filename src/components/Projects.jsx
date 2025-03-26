import React, { useState, useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'MakerSpace Inventory System ',
    image: 'UDel.png',
    description: 'This is my current senior design project where we are building an inventory management system for the University of Delaware MakerSpace. My contribution so far has been to develop a user friendly frontend using Vue and TypeScript, hosting the project securely on AWS, and dockerizing the application. The project is still in progress, but we are on track to finish by the end of the semester.',
    photos: ['/UDel.png'],
    link: '',
  },
  {
    title: 'Phishnet AI',
    image: '/phishnet.png',
    description: 'I am working on an anti-phishing website that uses my RESTful API to detect phishing scams with the OpenAI API. The RESTful API and MySQL database are complete and hosted in the AWS cloud. Moving forward, the plan is to complete the frontend ReactJS website and host it through AWS.',
    photos: ['/phishnet.png',],
    link: 'https://www.phishnetai.com/',
  },
  {
    title: 'Personal Compiler Project',
    image: '/python-logo.png',
    description: 'For this project, I worked on developing a personal Python compiler that translates and executes code efficiently. The project includes various modules for parsing, executing, and optimizing Python code, leveraging custom syntax trees and lambda conversions. This project is not fully complete, but I will continue to finish this project over the coming months. ',
    photos: ['/python-logo.png',],
    link: '',
  },
  {
    title: 'Drone Virtually Integrated Project',
    image: '/UDel.png',
    description: 'Worked with a small team to develop high quality drone scans of the University of Delaware campus. We used a combination of lidar, photogrammetry, and machine learning to create the 3D model. Recently we have worked on creating a virtual tour using our 3D model to deliver our research to the public. ',
    photos: ['/CampusScan.png', '/udeldrone.jpg', '/djicontroller.jpg'],
    link: 'https://vip.udel.edu/project/drone/',
  },
  {
    title: 'UDCIS Sage Discord Bot',
    image: '/sage.png',
    description: 'As part of the Sage Discord bot project, I developed several user commands using TypeScript to enhance user interaction and engagement. These commands allowed users to provide feedback, leave reviews, and access productivity tools tailored to the UDel Computer Science community.',
    photos: ['/sage.png',],
    link: 'https://ud-cis-discord.github.io/sage_info/',
  },
  {
    title: 'AWS Scalable Gaming Server',
    image: '/pixelmon.png',
    description: 'In this project, I accomplished the hosting of a dynamically scalable Minecraft server using Amazon Web Services infrastructure, specifically AWS S3 and EC2 instances, with the aid of the Command Line Interface (CLI). This ambitious endeavor showcased my proficiency in cloud computing as I leveraged S3 for data storage, ensuring seamless world backups and configuration files management, while EC2 instances were employed for flexible server hosting that could be easily adjusted to accommodate varying player loads. ',
    photos: ['/pixelmon.png',],
    link: '',
  },
  {
    title: 'Personal VPN Server',
    image: '/vpn.png',
    description: 'For my first cloud project I created a VPN infrastructure utilizing Amazon Web Services EC2 instances and the AWS AMI Marketplace. This venture was a valuable learning experience, enabling me to gain fundamental knowledge of connecting to and managing EC2 instances across multiple regions, while delving into the essentials of AWS services. Through this project, I honed my skills in configuring and maintaining virtual private networks. ',
    photos: ['/vpn.png',],
    link: '',
  },
  {
    title: 'Old Portfolio Website',
    image: '/website.png',
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeOverlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
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
          <button className="flex items-center gap-2 px-6 py-3 text-white bg-black rounded-full transition-transform transform hover:scale-105 hover:bg-gray-800">
            View Project
            <span className="w-4 h-4 border-r-2 border-b-2 border-white rotate-45"></span>
          </button>
          <div className="project-title">{project.title}</div>
        </div>
      ))}

      {selectedProject && (
        <div className="overlay">
          <div className="overlay-content">
            <div>
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
