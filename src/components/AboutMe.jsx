import React, { useState, useEffect } from 'react';
import './AboutMe.css';

const photos = [
  '/me&monkey.jpg',  
  // Add more photo paths as needed
];

function AboutMe() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  /* Re-add when I have more photos.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); // Change photo every 5 seconds

    return () => clearInterval(interval);
  }, []);
  */

  return (
    <section className="about-me-container">:
      <section className="about-me">
        <p>
          Hello! I'm Zachary Witte, a passionate developer with experience in building web applications using modern technologies like React, Vite, and more. I love creating intuitive and dynamic user experiences.
        </p>
        <p>
          In my free time, I enjoy [Your Hobbies/Interests]. Feel free to connect with me on [Your Social Media/Contact Info].
        </p>
      </section>
      <section className="photo-album">
        <img src={photos[currentPhotoIndex]} alt="About me" className="photo" />
      </section>
    </section>
  );
}

export default AboutMe; 