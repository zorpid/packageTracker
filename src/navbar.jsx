import React from 'react';
import './Navbar.css'; // Navbar styles

const Navbar = () => {
    return (
      <header className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">PackageTracker</h1>
          <p className="navbar-tagline">Your one-stop solution for tracking parcels!</p>
        </div>
      </header>
    );
  };
export default Navbar;
