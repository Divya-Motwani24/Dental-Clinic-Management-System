// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <p>SmileBright Dental Clinic, 123 Main St, Mumbai, India</p>
          </div>
          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <p>+91 98765 43210</p>
          </div>
          <div className="info-box">
            <FaEnvelope className="icon" />
            <p>contact@smilebrightclinic.com</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
