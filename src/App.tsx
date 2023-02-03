import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'
import Presentation from './components/Presentation'
import AboutMe from './components/AboutMe'
import HardSkills from './components/HardSkills'
import Projects from './components/Projects'
function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Presentation />
        <AboutMe />
        <HardSkills />
        <Projects />
      </main>
    </>
  )
}

export default App
