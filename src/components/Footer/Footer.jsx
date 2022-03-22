import React from "react";
import { Row } from "react-bootstrap";
import "./footer.css";
function Footer() {
  return (
    <Row>
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="#">
              <i className="icon ion-social-instagram"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-snapchat"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-twitter"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Services</a>
            </li>
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright">Pizza Hut © 2021</p>
        </footer>
      </div>
    </Row>
  );
}

export default Footer;
