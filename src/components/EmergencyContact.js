import React from 'react';
import './EmergencyContact.css';
import emergencyBg from '../assets/image 3.webp'; // Ensure the file name matches exactly

function EmergencyContact() {
  return (
    <section
      className="emergency-contact-section"
      style={{ backgroundImage: `url(${emergencyBg})` }}
    >
      <div className="emergency-overlay">
        <div className="emergency-content">
          <h2>Do you need Emergency Medical Care?</h2>
          <p>We are here to help you 24/7. Don’t hesitate to contact us for immediate support.</p>
          <a href="tel:+917124071454" className="emergency-btn">Call Now: +91 7124071454</a>
        </div>
      </div>
    </section>
  );
}

export default EmergencyContact;
