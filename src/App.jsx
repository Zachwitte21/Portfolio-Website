import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
    </>
  )
}

export default App
