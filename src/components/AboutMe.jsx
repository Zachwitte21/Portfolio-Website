import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="content">
        <section className="intro">
          <h1 className="section-title">Get to know me!</h1>
          <p>
          I am an <strong>innovative and detail-oriented Software Engineer</strong> with hands-on experience in 
          <strong> cloud computing, full-stack development, and database management</strong>. My expertise includes designing 
          <strong> scalable web applications</strong>, optimizing <strong>AWS infrastructure</strong>, and developing 
          <strong> automation tools</strong> to improve efficiency.
          </p>
          <p>
          I am passionate about <strong>solving complex technical challenges</strong> and delivering 
          <strong> high-quality software solutions</strong>, I have a strong foundation in 
          <strong> Agile development</strong> and <strong>cross-functional collaboration</strong>. 
          I am particularly interested in <strong>AWS cloud architecture</strong> and <strong>backend systems</strong>.
          </p>
          <p>
            Feel free to <strong>reach out</strong> to me if you'd like to discuss a project or just say hello! The best way to reach me is through my <strong>LinkedIn</strong>: 
          </p>
          <a href="https://www.linkedin.com/in/zacharywitte2025" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/zacharywitte2025</a>
        </section>

        <section className="skills expanded">
          <h1 className="section-title">My Skills</h1>
          <div className="skills-list">
            {[
              "React", "AWS", "JavaScript", "Java", "MySQL", "Vue", "Python", "Docker", "Git", "C++", "SQL"
            ].map((skill) => (
              <span key={skill} className="skill">{skill}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
