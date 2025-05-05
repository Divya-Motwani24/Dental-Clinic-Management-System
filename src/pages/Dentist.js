// src/pages/Dentists.js
import React from 'react';
import './Dentists.css';

function Dentists() {
  return (
    <section className="dentists-section">
      <h2>Meet Our Dentists</h2>
      <div className="dentists-list">
        <div className="dentist-card">
          <h3>Dr. John Doe</h3>
          <p>General Dentistry</p>
        </div>
        <div className="dentist-card">
          <h3>Dr. Jane Smith</h3>
          <p>Cosmetic Dentistry</p>
        </div>
        <div className="dentist-card">
          <h3>Dr. Emily Johnson</h3>
          <p>Orthodontics</p>
        </div>
      </div>
    </section>
  );
}

export default Dentists;
