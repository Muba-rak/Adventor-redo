import "./App.css";
import Banner from "./components/Banner";
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
    </>
  );
}

export default App;
