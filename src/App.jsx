import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import { Linkedin, Github, Twitter } from 'lucide-react'; // Import Lucide icons

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about-container">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact-container">
        <Contact />
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>Zachary Witte</h3>
            <p>
              A Full-Stack Software Engineer passionate about building scalable applications across web, mobile, and AI. I enjoy leveraging AWS cloud technologies to create efficient, high-performance solutions that drive innovation and success.
            </p>
          </div>
          <div className="social-icons-container">
            <h3>Personal Links</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/zacharywitte2025" target="_blank" rel="noopener noreferrer">
                <Linkedin className="social-icon linkedin" />
              </a>
              <a href="https://github.com/Zachwitte21" target="_blank" rel="noopener noreferrer">
                <Github className="social-icon github" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © Copyright 2025. Made by Zachary Witte
        </div>
      </footer>
    </div>
  );
}

export default App;
