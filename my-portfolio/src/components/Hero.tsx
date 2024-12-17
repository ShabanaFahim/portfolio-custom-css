import React from 'react'
import Navbar from './Navbar'
import '../app/styles/hero.css'


const Hero = () => {
  return (
    <div
      id="hero"
      className="hero-container"
      style={{
        backgroundImage: 'url("/banner.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'right top',
      }}
    >
      <>
        <Navbar />
        <div className="hero-content">
          <div className="hero-left"></div>
          <div className="hero-text">
            <div>
              <p data-aos="zoom-in-up">I'm</p>
              <p data-aos="zoom-in-up">Shabana Faheem</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Hero;
