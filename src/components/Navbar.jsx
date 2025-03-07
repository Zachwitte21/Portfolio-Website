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
      <ul className="navbar-list">
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
      </ul>
    </nav>
  );
}

export default Navbar;
