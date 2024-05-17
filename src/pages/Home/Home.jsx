import React from "react";
import "./Home.css";
import { About, Features, Attraction, Services } from "../../containers/index";
import image1 from "../../assests/pic1.jpg";
import { Fade } from "react-reveal";

const Home = () => {
  return (
    <>
      {/* Hero Section */}

      <section className="hero">

        <div className="heroContainer">
          <Fade bottom cascade duration={1000}>
          <div className="heroContainer_left">
            <h3>Step into a haven of warmth and tranquility</h3>
            <h2>Welcome to</h2>
            <h1>
              CANAL <span className="text-light">HOMESTAY</span>
            </h1>
            <p>
              Canal Homestay is a well cherished homestay in Dehradun and
              welcomes you to experience the perfect blend of urban comfort and
              the natural charm of Dehradun's breathtaking landscapes.
            </p>
          </div>
          </Fade>

          <Fade bottom cascade duration={1000}>
          <div className="heroContainer_right">
            <div className="heroContainer_right-imgBox">
              <img src={image1} alt="heroimg" />
            </div>
          </div>
          </Fade>
        </div>
      </section>

      <About />

      <Features />

      <Attraction />

      <Services/>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
