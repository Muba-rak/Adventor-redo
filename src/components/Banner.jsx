import React from "react";
import logo from "../assets/logo.png";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <nav>
        <div className="logo">
          <img src={logo} alt="adventor" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#" className="text-decoration-none">
                Adventures
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Contact
              </a>
            </li>
            <li>
              <button className="navbtn">Explore</button>
            </li>
          </ul>
        </div>
      </nav>

      <section className="inner">
        <div>
          <h2>Discover</h2>
          <h1>The Adventure Travel</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at
            viverra cursus euismod est nec at. Sociis id non ac duis mauris
            luctus id arcu. Turpis non felis, vitae egestas at condimentum.
            Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus.
          </p>
          <button>View Adventures</button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
