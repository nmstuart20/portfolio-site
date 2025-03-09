// components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    const imagePath = `./logo.png`;
    return (
      <nav className="nav-header">
        <img src={imagePath} alt="Logo" />
        <ul class="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </nav>
    );
}

export default Navigation;