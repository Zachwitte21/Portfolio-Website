import React, { useState, useEffect } from 'react';
import './AboutMe.css';

const photos = [
  '/me&monkey.jpg',  
  // Add more photo paths as needed
];

function AboutMe() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  return (
    <section>
      <section className="about-me">
        <p>
        Innovative and detail-oriented Software Engineer with hands-on experience in cloud computing, backend development, and database management. Adept at designing scalable web applications, 
        optimizing AWS infrastructure, and developing automation tools to improve efficiency. Passionate about solving complex technical challenges and delivering high-quality software solutions. 
        Strong foundation in Agile development and cross-functional collaboration, with a keen interest in AWS cloud architecture and backend systems. Looking forward to leveraging my skills to 
        contribute to impactful projects and drive technological innovation.
        </p>
        <p>
          In my free time, I enjoy racing cars, spending times with friends, and flying drones. Feel free to connect with me on linkedin at: 
        </p>
        <a href="https://www.linkedin.com/in/zacharywitte2025/" target="_blank" rel="noopener noreferrer">linkedin.com/in/zacharywitte2025/</a>
      </section>
      <section className="photo-album">
        <img src={photos[currentPhotoIndex]} alt="About me" className="photo" />
      </section>
    </section>
  );
}

export default AboutMe; 