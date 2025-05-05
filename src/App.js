import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Service from "./pages/Service";
import Dentist from "./pages/Dentist";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service" element={<Service />} />
        <Route path="/dentist" element={<Dentist />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
