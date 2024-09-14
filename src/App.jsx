import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (

    <>
    <Reveal>
    <Navbar/>
    
    <Hero/>
    <Skill/>
    <Portfolio/>
    <Education/>
    <Contact/>
    <Footer/>
    </Reveal>
    </>
  )
}

export default App