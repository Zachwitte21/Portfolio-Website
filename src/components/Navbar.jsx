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

  return (
    <nav className="navbar">
      <img src="suit_picture.png" alt="Profile" className="navbar-image" />
      <span className="navbar-name">Zachary Witte</span>
      <ul className="navbar-list">
        <li>
          <button onClick={() => scrollToSection('home')} className="nav-button">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about-me')} className="nav-button">
            About Me
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('projects')} className="nav-button">
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact')} className="nav-button">
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
