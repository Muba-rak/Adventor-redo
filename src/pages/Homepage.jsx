import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Section1 from "../components/Section1";
import Testimonial from "../components/Testimonial";
import TourContainer from "../components/TourContainer";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="submain">
        <Section1 />
        <TourContainer />
      </div>
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Homepage;
