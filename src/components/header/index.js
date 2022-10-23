import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import Menu from "../../assets/images/menu.png";
import CloseButton from "../../assets/images/close.svg";
const Headers = () => {
  const [active, setActive] = useState(true);

  const openSidebar = () => {
    setActive(true);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <h1>BCR</h1>
          </div>

          {active && (
            <>
              <div className={`overlay-bg ${active ? "menu-active" : ""}`} />
              <div className={`sidebar ${active ? "menu-active" : ""}`}>
                <div className="top-sidebar">
                  <Link className="btn btn-succes" to="/" role="button">
                    BCR
                  </Link>
                  <div className="close-icon">
                    <img src={CloseButton} alt="" onClick={() => setActive(false)} />
                  </div>
                </div>
                <ul className="menu">
                  <li>
                    <a href="#our-services">Our Services</a>
                  </li>
                  <li>
                    <a href="#why">Why Us</a>
                  </li>
                  <li>
                    <a href="http://">Testimonial</a>
                  </li>
                  <li>
                    <a href="http://">FAQ</a>
                  </li>
                </ul>
              </div>
            </>
          )}

          <div className="burger-icon" onClick={openSidebar}>
            <img src={Menu} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Headers;
