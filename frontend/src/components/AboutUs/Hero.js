import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-content">
       <div className="hero-image">
          <img src="OIP565.jpeg" alt="Web Development" />
        </div>
      
        <div className="hero-text">
          <h1>Welcome to Frithcode</h1>
          <p>Best Management System for Your Institute</p>
          <button>Explore more</button>
        </div>
       
      </div>
    </section>
  );
}

export default Hero;