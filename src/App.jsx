import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutMe />
      <Projects />
    </>
  )
}

export default App
