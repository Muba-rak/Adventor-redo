import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Banner />
      <div className="submain">
        <Section1 />
      </div>
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
