import React from "react";
import "../styles/section1.css";
import Adventures from "./Adventures";

const Section1 = () => {
  return (
    <div className="section1" id="adventures">
      <div className="sec1-heading">
        <h2 className="take">Take Yourself</h2>
        <h2 className="ideas">Adventure Ideas</h2>
      </div>
      <div>
        <Adventures />
      </div>
    </div>
  );
};

export default Section1;
