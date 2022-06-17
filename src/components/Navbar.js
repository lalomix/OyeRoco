import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <div className="Navbar">
        <div class="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto title text-decoration-none">
        <img href="../images/logo.gif"></img>
        
        <span className="fs-4">Roco Store</span>
      </a>

      <ul class="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul>
    </header>
  </div>
      </div>
    );
  }
  export default Navbar;
  