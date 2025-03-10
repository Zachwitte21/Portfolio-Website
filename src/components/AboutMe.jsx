import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
      <section className="about-me-container">
        {/* Left Section - Text */}
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            I am an <strong>innovative and detail-oriented Software Engineer</strong> with hands-on experience in 
            <strong> cloud computing, backend development, and database management</strong>. My expertise includes designing 
            <strong> scalable web applications</strong>, optimizing <strong>AWS infrastructure</strong>, and developing 
            <strong> automation tools</strong> to improve efficiency.
          </p>
          <p>
            Passionate about <strong>solving complex technical challenges</strong> and delivering 
            <strong> high-quality software solutions</strong>, I have a strong foundation in 
            <strong> Agile development</strong> and <strong>cross-functional collaboration</strong>. 
            I am particularly interested in <strong>AWS cloud architecture</strong> and <strong>backend systems</strong>.
          </p>
          <p>
            In my free time, I enjoy <strong>racing cars</strong>, <strong>spending time with friends</strong>, 
            and <strong>flying drones</strong>. Feel free to connect with me on LinkedIn:
          </p>
          <a href="https://www.linkedin.com/in/zacharywitte2025/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-link">
            linkedin.com/in/zacharywitte2025/
          </a>
        </div>

        {/* Right Section - Photo */}
        <div className="about-me-photo">
          <img src="/me&monkey.jpg" alt="Zachary Witte" className="profile-photo" />
        </div>
      </section>
  );
}

export default AboutMe;
