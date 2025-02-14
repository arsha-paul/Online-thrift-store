    import React from 'react'
import './Hero.css';
import hand_icon from "../assets/offeree.png"
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/bg-img.jpg'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            
            <div className="hand-icon">
                <p>ENOJY</p>
                <img src={hand_icon} alt="" />
            </div>
                <p>YOUR</p>
                <p>SECOND CHANCE</p>
         <div className="latest-btn">
            <>Trending</>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
      
        {/* <div className="hero-right">
            <img src={hero_image} alt="" />

        </div> */}
    </div>
  )
}

export default Hero