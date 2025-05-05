// src/components/About.js
import React from 'react';
import './About.css';
import aboutImage from '../assets/image 2.avif'; // Add a relevant image

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Welcome to SmileBright Dental Clinic</h2>
          <p>
            At <strong>SmileBright</strong>, we’re committed to helping you achieve your healthiest and most confident smile.
            With over 20 years of experience, our professional team provides high-quality, personalized dental care in a
            calm, comforting environment.
          </p>
          <p>
            From regular checkups to cosmetic dentistry and emergency care, we use the latest technology and gentle techniques
            to ensure your comfort and satisfaction.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Dental clinic interior" />
        </div>
      </div>
    </section>
  );
}

export default About;
