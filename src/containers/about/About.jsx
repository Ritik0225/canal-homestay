import React from "react";

import "./about.css";
import image2 from "../../assests/pic4.jpg";
import { FaStar } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="aboutContainer">
          <Fade left cascade duration={1500}>
          <div className="aboutContainer_left">
            <div className="aboutContainer_left-imgBox">
              <img src={image2} alt="aboutimg" />
            </div>
          </div>
          </Fade>
          <Fade right cascade duration={1500}>
          <div className="aboutContainer_right">
            <h2>Welcome Home!</h2>
            <div className="aboutContainer_right_subtext">
              <h3>
                Canal homestay is located on canal road, jakhan, nestled in the
                heart of Dehradun Uttarakhand.
              </h3>

              <p>
                Escape to Dehradun Serenity Homestay, where a tranquil ambiance
                awaits. Immerse yourself in serene landscapes, relish homemade
                meals, and unwind for a rejuvenating getaway. Book your stay and
                experience serenity like never before.
              </p>

              <div className="aboutContainer_right_subtext_iconBox">
                <FaStar color="#FFFFFF" fontSize={60} />
                <h4>Consistently High Guest Satisfaction Since 2012.</h4>
              </div>
              <div className="aboutContainer_right_subtext_iconBox">
                <GiRibbonMedal color="#FFFFFF" fontSize={60} />
                <h4>Uttarakhand Tourism Board Gold Category.</h4>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default About;
