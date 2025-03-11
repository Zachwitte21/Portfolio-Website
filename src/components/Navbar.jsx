import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemTheme);
    document.documentElement.setAttribute('data-theme', systemTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSectionProjects = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = id === 'contact-container' || id === 'projects' ? -80 : 0; // Adjust offset as needed
      const topPosition = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  const scrollToSectionContact = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = id === 'contact-container' || id === 'projects' ? -50 : 0; // Adjust offset as needed
      const topPosition = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <img src="finished-headshot.png" alt="Profile" className="navbar-image" />
      <span className="navbar-name">Zachary Witte</span>
      <ul className="navbar-list">
        <li>
          <button onClick={() => scrollToSection('home')} className="nav-button">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about-container')} className="nav-button">
            About Me
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSectionProjects('projects')} className="nav-button">
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSectionContact('contact-container')} className="nav-button">
            Contact
          </button>
        </li>
        <li>
          <button onClick={toggleTheme} className="nav-button">
            Toggle Theme
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
