import React from 'react'
import './Hero.css'
import twitter from '../../assets/twitter.svg.svg'
import github from '../../assets/github-brands.svg'
import Vector1 from '../../assets/Vector 1.png'
import Eclipse2 from '../../assets/Ellipse 3.png'
import Eclipse from "../../assets/Ellipse 2 (1).png"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const Hero = () => {
  return (
    <>
      <Navbar />
      <div className='hero container'>
        <div className='hero-text'>
          <p>WELCOME TO</p>
          <h1>Isaiah Samuel</h1>
          <p>SECURITY & SOFTWARE ENGINEER</p>
        </div>
        
        <div className='hero1'>
          <img src={github} alt="GitHub" />
          <img src={twitter} alt="Twitter" />
          <div className='hero2'> 
              <div className="heroo">
                <img src={Eclipse2} alt="Eclipse Background" />
                <div className="herom">
                  <img src={Eclipse} alt="Eclipse Foreground"  />
                  <div className="text">LET'S <br /> TALK</div>
                </div>
              </div>
              </div>
            
        </div>
        
        <div className="hero4">
          <h1>Services</h1>
          <p>Building digital products with better experience</p>
        </div>

        <div className="hero5">
          <p>Hire Me</p>
          <h1>Tell me your plan</h1>
          <form>
            <input type="text" name='name' placeholder='Name' required />
            <input type="email" name='Email' placeholder='Email' required />
            </form>

            <form action="">
              <textarea name="message" rows={6} placeholder='Message' required></textarea>
            </form>
                    
                    <div className="kelechi">
                      <img src={Vector1} alt=""/>

                       <div className='hero2'> 
            
            
              <div className="heroo">
                <img src={Eclipse2} alt="Eclipse Background" />
                <div className="herom">
                  <img src={Eclipse} alt="Eclipse Foreground"  />
                  <button className='b'>SEND</button>
                </div>
              </div>
              </div>
</div>
                    



        </div>
      </div>
       <Footer />
    </>
  )
}

export default Hero