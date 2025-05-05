// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import './Hero.css';
import hero1 from '../assets/download.jpeg';  // Example path for hero image 1
import hero2 from '../assets/OIP.jpeg';      // Example path for hero image 2

const images = [hero1, hero2];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Experience Advanced Dental Care</h1>
          <p className="hero-subtitle">Creating Healthy Smiles That Last a Lifetime</p>
          <div className="hero-buttons">
            <a href="/appointment" className="hero-btn">Book Appointment</a>
            <a href="/service" className="hero-btn secondary">Our Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
