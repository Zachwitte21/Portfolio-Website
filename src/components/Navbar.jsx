import React from 'react';
import './Navbar.css';

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <img src="suit_picture.png" alt="Profile" className="navbar-image" />
      <ul className="navbar-links">
        <li onClick={() => scrollToSection('about-me')}>About Me</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
