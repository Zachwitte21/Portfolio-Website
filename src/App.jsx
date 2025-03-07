import './App.css'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default App
