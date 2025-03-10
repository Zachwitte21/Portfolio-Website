import './App.css'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>Zachary Witte</h3>
            <p>A Full-Stack Software Engineer passionate about building scalable applications across web, mobile, and AI. I enjoy leveraging AWS cloud technologies to create efficient, high-performance solutions that drive innovation and success.</p>
          </div>
          <div>
            <h3>Social</h3>
            <div className="social-icons">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © Copyright 2025. Made by Zachary Witte
        </div>
      </footer>
    </div>
  )
}

export default App
