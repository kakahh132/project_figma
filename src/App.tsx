import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Project from './components/Project/Project'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tibits from './components/Tibits/Tibits'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Tibits" element={<Tibits />} />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App