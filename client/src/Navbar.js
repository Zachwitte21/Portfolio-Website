import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="hamburger" onClick={toggleNavbar}>
        ☰
      </button>
      <nav className={`side-navbar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleNavbar}>
          ×
        </button>
        <ul className="navbar-links">
          <li>
            <Link to="experience" smooth={true} duration={500} onClick={toggleNavbar}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={toggleNavbar}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={toggleNavbar}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
