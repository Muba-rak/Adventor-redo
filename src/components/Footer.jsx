import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import "../styles/footer.css";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="main-footer">
          <div>
            <img src={Logo} alt="Logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Tincidunt id sem vel quis in turpis sit eget pellentesque.
              <br /> Nunc etiicies in rhoncus, rhoncus in arcu.
            </p>
          </div>
          <div>
            <h2>Quick Menu</h2>
            <p>Home</p>
            <p>About</p>
            <p>Stories</p>
            <p>Trending Stories</p>
            <p>Popular Stories</p>
          </div>
          <div>
            <h2>Sign Up For Our Newsletter</h2>
            <form>
              <div className="bg-white special mt-5 d-flex justify-content-between align-items-center">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe </button>
              </div>
            </form>
          </div>
        </div>
        <div className="underline"></div>
        <div className="socials">
          <h5>Terms and Policy</h5>
          <div className=" d-flex align-items-center">
            <TiSocialFacebook />
            <TiSocialLinkedin />
            <TiSocialTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
