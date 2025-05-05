import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import Departments from '../components/Departments';
import Contact from '../components/Contact';
import EmergencyContact from '../components/EmergencyContact';

// Home.js - This page gathers all the main sections of the website.
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <EmergencyContact />
      <Departments />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
