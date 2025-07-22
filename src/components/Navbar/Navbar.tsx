import React from 'react'
import './Navbar.css'
import Vector from '../../assets/Vector.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={Vector} alt=""  className='Vector'/>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <li>Services</li>
        <Link to='/Project'><li>Portfolio </li></Link>
        <li>Hire me</li>
        <li><button className='btn'>Download cv</button></li>
      </ul>
    </nav> 
  )
}

export default Navbar