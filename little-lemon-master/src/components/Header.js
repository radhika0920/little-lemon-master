import React from "react";
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      {/* The header content will go here */}
      <img src={logo} alt="Little Lemon Logo" />
      Header
    </header>
  );
}

export default Header;