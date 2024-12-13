import React, { useState } from "react";
import "./Header.css"; // CSS for styling the header

const Header = ({scrollToFooter}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Shop</h1>
      </div>
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>
      <nav className={`header-nav ${isNavOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#contact" onClick={scrollToFooter} >Get in Touch</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
