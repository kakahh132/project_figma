import React from 'react';
import './Tibits.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Rectangle from "../../assets/Rectangle 22.png"
import Photo from "../../assets/photo.png"
import Empty from "../../assets/emptyimage.png"
import { Link, useNavigate } from "react-router-dom";

const Tibits = () => {
    const navigate = useNavigate ()
  return (
    <>
      <Navbar />
      <div className="projectb">
        <div className="projectc">
          <h1>
            Check out some
            <br />
            things I've built
          </h1>
           <div className="praise">
           <button className="bless" onClick={()=> navigate('/Project')}>Project</button>
              <button className="bless" onClick={()=> navigate('/Tibits')}>Tibits</button>
              </div>
               <hr />
        </div>
        <div className="fg">
        <div className="goodie">
          <div className="goodiea">
            <img src={Rectangle} alt="" />
         
          <div className= "goodieb">
            <img src={Photo} alt="" />
          </div>
           </div>
        </div>

         <div className="goodie">
          <div className="goodiea">
            <img src={Rectangle} alt="" />
         
          <div className= "goodieb">
            <img src={Photo} alt="" />
          </div>
           </div>
        </div>
        </div>
        
        <div className="fg">
        <div className="goodie">
          <div className="goodiea">
            <img src={Rectangle} alt="" />
         
          <div className= "goodieb">
            <img src={Photo} alt="" />
          </div>
           </div>
        </div>

         <div className="goodie">
          <div className="goodiea">
            <img src={Rectangle} alt="" />
         
          <div className= "goodieb">
            <img src={Photo} alt="" />
          </div>
           </div>
        </div>
        </div>
        
        <div className="fg">
        <div className="goodie">
          <div className="goodiea">
            <img src={Rectangle} alt="" />
         
          <div className= "goodieb">
            <img src={Photo} alt="" />
          </div>
           </div>
        </div>

         <div className="goodie">
          <div className="goodiea">
            <img src={Rectangle} alt="" />
         
          <div className= "goodieb">
            <img src={Photo} alt="" />
          </div>
           </div>
        </div>
        </div>
        
        <div className="fg">
        <div className="goodie">
          <div className="goodiea">
            <img src={Rectangle} alt="" />
         
          <div className= "goodieb">
            <img src={Photo} alt="" />
          </div>
           </div>
        </div>

         <div className="goodie">
          <div className="goodiea">
            <img src={Rectangle} alt="" />
         
          <div className= "goodieb">
            <img src={Photo} alt="" />
          </div>
           </div>
        </div>
        </div>
        
        <div className="fg">
        <div className="goodie">
          <div className="goodiea">
            <img src={Rectangle} alt="" />
         
          <div className= "goodieb">
            <img src={Photo} alt="" />
          </div>
           </div>
        </div>

         <div className="goodie">
          <div className="goodiea">
            <img src={Rectangle} alt="" />
         
          <div className= "goodieb">
            <img src={Photo} alt="" />
          </div>
           </div>
        </div>
        </div>
        
        






      </div> 
      <Footer />
    </>
  );
}

export default Tibits;