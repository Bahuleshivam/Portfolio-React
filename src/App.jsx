import './App.css'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import { useState } from 'react'

function App() {


  const [activeLink, setActiveLink] = useState('about');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
    <Router>
    <Navbar activeLink={activeLink} handleLinkClick={handleLinkClick} />
    <Routes>
      <Route exact path='/' element={<About activeLink={activeLink} handleLinkClick={handleLinkClick}/>} ></Route>
      <Route exact path='/Skills' element={<Skills/>} ></Route>
      <Route exact path='/Projects' element={<Project />} ></Route>
      <Route exact path='/Contact' element={<Contact/>} ></Route>
    </Routes>

    </Router>
    

    </>
  )
}

export default App
