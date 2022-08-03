import React from "react";
import logo from "../../assets/logo/slack.png";
import Button from "../button";
import "./header.scss";

const Header = () => {
  const renderUser = () => {
    return (
      <div>
        Welcome <strong>Amanda</strong>
      </div>
    );
  };
  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a href="./index.html" className="brand">
          <picture>
            <img src={logo} alt="logo" height="auto" width="140px" />
          </picture>
        </a>
        <div className="header-action">
          {renderUser()}
          <Button>Login</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
