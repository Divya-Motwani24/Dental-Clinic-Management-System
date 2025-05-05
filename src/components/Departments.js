// src/components/Departments.js
import React from 'react';
import './Departments.css';
import { FaTooth, FaSmile, FaChild, FaTeethOpen, FaTeeth, FaUserMd, FaSyringe } from 'react-icons/fa';

function Departments() {
  const departments = [
    { name: "General Dentistry", icon: <FaTooth /> },
    { name: "Orthodontics", icon: <FaSmile /> },
    { name: "Periodontics", icon: <FaSyringe /> },
    { name: "Endodontics", icon: <FaTeethOpen /> },
    { name: "Prosthodontics", icon: <FaTeeth /> },
    { name: "Pediatric Dentistry", icon: <FaChild /> },
    { name: "Oral & Maxillofacial Surgery", icon: <FaUserMd /> },
  ];

  return (
    <section className="departments-section">
      <h2 className="section-title">Our Dental Departments</h2>
      <div className="departments-grid">
        {departments.map((dept, index) => (
          <div className="department-card" key={index}>
            <div className="icon">{dept.icon}</div>
            <h3>{dept.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Departments;
