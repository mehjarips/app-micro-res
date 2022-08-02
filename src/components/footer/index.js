import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <div className="copyright-text">
              <p>{`Copyright © ${new Date().getFullYear()}, All Right Reserved `}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
