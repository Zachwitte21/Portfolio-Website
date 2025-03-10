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
            <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
          </div>
          <div>
            <h3>Social</h3>
            <div className="social-icons">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">YouTube</a>
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
