// src/pages/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Have any questions or concerns? Reach out to us—we’d love to hear from you.
          </p>
          <ul>
            <li><strong>Phone:</strong> <a href="tel:+917124071454">+91 7124071454</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@smilebright.com">info@smilebright.com</a></li>
            <li><strong>Location:</strong> 123 Dental Street, Smile City, Maharashtra</li>
            <li><strong>Hours:</strong> Mon–Sat: 9 AM – 8 PM</li>
          </ul>
        </div>

        <form className="contact-form">
          <h3>Send a Message</h3>
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
