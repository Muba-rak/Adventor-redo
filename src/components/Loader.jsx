import React from "react";
import "animate.css";

const Loader = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <h2 className="display-5 fw-light text-success animate__animated animate__pulse">
        Loading...
      </h2>
    </div>
  );
};

export default Loader;
