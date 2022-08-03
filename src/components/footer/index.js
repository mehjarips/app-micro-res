import React from "react";
import logo from "../../assets/logo/slack.png";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="container footer-row">
        <picture>
          <img src={logo} alt="logo" height="auto" width="80px" />
        </picture>

        <ul className="footer-link">
          <li>
            <a>Simple link 1</a>
          </li>
          <li>
            <a>Simple link 2</a>
          </li>
        </ul>

        <p className="copy-right">{`Copyright © ${new Date().getFullYear()}, All Right Reserved `}</p>
      </div>
    </footer>
  );
}

export default Footer;
