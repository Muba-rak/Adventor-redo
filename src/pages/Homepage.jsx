import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Section1 from "../components/Section1";
import Testimonial from "../components/Testimonial";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="submain">
        <Section1 />
      </div>
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Homepage;
