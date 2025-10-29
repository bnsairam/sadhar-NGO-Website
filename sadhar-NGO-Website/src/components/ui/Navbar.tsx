// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router, otherwise use <a> tags

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/coaches">Coaches</Link></li>
        <li><Link to="/footer">Footer</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/header">Header</Link></li>
        <li><Link to="/hero">Hero</Link></li>
        <li><Link to="/mission">Mission</Link></li>
        <li><Link to="/ourwork">Our Work</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/students">Students</Link></li>
      </ul>
      <style jsx>{`
        .navbar {
          background-color: #333;
          padding: 1rem;
        }
        .nav-list {
          list-style: none;
          display: flex;
          gap: 1rem;
          margin: 0;
          padding: 0;
        }
        .nav-list li a {
          color: white;
          text-decoration: none;
        }
        .nav-list li a:hover {
          color: #ffd700;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;