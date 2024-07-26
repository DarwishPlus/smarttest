// src/Header.js

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <div className="logo">
            <Link to="/">
              <img src="images/logo.png" alt=""></img>
            </Link>
            <h4 className="logo-text">House Tech</h4>
          </div>
          <div className="header-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="./Contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
