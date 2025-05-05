// src/pages/Appointment.js
import React, { useState } from 'react';
import './Appointment.css';

function Appointment() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    concern: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert('Appointment submitted!');
  };

  return (
    <section className="appointment-section">
      <h2>Book an Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <textarea
          name="concern"
          placeholder="Your Concern"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Appointment;
