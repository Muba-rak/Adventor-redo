import React from "react";
import "../styles/tour.css";
import tourImage from "../assets/tour.png";
const TourContainer = () => {
  return (
    <div className="tour-container container">
      <div className="tour-text p-4">
        <h2>
          Making adventure tours,
          <br className="d-none d-md-block d-lg-none d-xl-block" />
          activities affordable.
        </h2>
        <div className="empty"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor cursus
          tortor tempus ac. Purus amet risus amet sagittis. Enim nulla a sapien
          lectus tellus mauris integer ut. Magna viverra sit rhoncus convallis
          id. Aenean egestas turpis aenean feugiat pharetra sed sed morbi
          faucibus.
        </p>
      </div>
      <div className="tour-image">
        <img src={tourImage} alt="image" />
      </div>
    </div>
  );
};

export default TourContainer;
