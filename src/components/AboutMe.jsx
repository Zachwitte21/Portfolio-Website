import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="content">
        <section className="intro">
          <h1 className="section-title">Get to know me!</h1>
          <p>
            I'm a <strong>Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people in the Dev Community. Feel free to Connect or Follow me on my
            <a href="#" className="link"> LinkedIn </a> and
            <a href="#" className="link"> Instagram </a>
            where I post useful content related to Web Development and Programming.
          </p>
          <p>
            I'm open to <strong>Job</strong> opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to <strong>contact</strong> me.
          </p>
        </section>

        <section className="skills expanded">
          <h1 className="section-title">My Skills</h1>
          <div className="skills-list">
            {[
              "HTML", "CSS", "JavaScript", "React", "WordPress", "PHP", "SASS", "GIT", "GitHub", "Responsive Design", "SEO", "Terminal"
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
