// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Nav() {
    return (
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Reserve a Table</Link></li>
          <li><Link to="/specials">Specials</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
    );
  }
  

export default Nav;
