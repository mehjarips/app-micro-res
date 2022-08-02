import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a href="./index.html" className="brand">
          Brand
        </a>
        <div className="burger" id="burger">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <span className="overlay"></span>
        <div className="menu" id="menu">
          <ul className="menu-inner">
            <li className="menu-item">
              <a className="menu-link" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
        <span>
          <i className="bx bx-search search-toggle"></i>
        </span>
      </nav>
    </header>
  );
};

export default Header;
