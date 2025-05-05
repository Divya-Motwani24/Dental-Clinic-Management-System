// src/pages/Services.js
import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services-section">
      <h2>Our Dental Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>General Dentistry</h3>
          <p>We offer a full range of general dental services to keep your smile healthy.</p>
        </div>
        <div className="service-item">
          <h3>Cosmetic Dentistry</h3>
          <p>Enhance your smile with advanced cosmetic dental procedures.</p>
        </div>
        <div className="service-item">
          <h3>Orthodontics</h3>
          <p>Correct misalignments with our state-of-the-art braces and clear aligners.</p>
        </div>
        <div className="service-item">
          <h3>Teeth Whitening</h3>
          <p>Brighten your smile with our professional teeth whitening services.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
