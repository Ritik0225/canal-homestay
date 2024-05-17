import React from "react";
import "./About.css";
import { Fade } from "react-reveal";
import image2 from "../../assests/pic2.jpg";
import { GiRibbonMedal } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

const About = () => {
  return (
    <>
      <header className="aboutus">
        <h1>ABOUT US</h1>
      </header>
      <main>
        <section className="aboutusContainer">
          <div className="aboutusContainer_left">
            <Fade left cascade duration={1500}>
              <div className="aboutusContainer_left_subtext">
                <h2>Who are we?</h2>
                <p>
                  Escape to Dehradun Serenity Homestay, where a tranquil
                  ambiance awaits. Immerse yourself in serene landscapes, relish
                  homemade meals, and unwind for a rejuvenating getaway. Book
                  your stay and experience serenity like never before.
                </p>
                <h3>
                  Canal homestay is located on canal road, jakhan, nestled in
                  the heart of Dehradun Uttarakhand.
                </h3>

                <div className="aboutusContainer_left_subtext_iconBox">
                  <FaStar color="var(--color-purple)" fontSize={60} />
                  <h4>Consistently High Guest Satisfaction Since 2012.</h4>
                </div>
                <div className="aboutusContainer_left_subtext_iconBox">
                  <GiRibbonMedal color="var(--color-purple)" fontSize={60} />
                  <h4>Uttarakhand Tourism Board Gold Category.</h4>
                </div>
              </div>
            </Fade>
          </div>
          <Fade right cascade duration={1500}>
            <div className="aboutusContainer_right">
              <div className="aboutusContainer_right-imgBox">
                <img src={image2} alt="aboutimg" />
              </div>
            </div>
          </Fade>
        </section>
        <section className="aboutusContainer2">
          <Fade bottom duration={1000}>
          <h2>OUR CORE VALUES</h2>
          </Fade>
          <Fade bottom cascade duration={1000}>
          <div className="aboutusContainer2_info">
            <ul>
              <li>
                <span className="text-bold">Exceptional service: </span>At canal
                homestay, our commitment is to surpass the expectations of our
                cherished guests. We take pride in delivering not just a
                service, but a personalized and heartfelt experience that
                anticipates and fulfills their every need. Our dedicated team is
                here to create moments of warmth, ensuring your stay is nothing
                short of exceptional. Welcome to an elevated level of
                hospitality where your comfort is our priority.
              </li>
              <li>
                <span className="text-bold">Attention to detail: </span>we take
                pride in the little things that make a big difference. From
                impeccable cleanliness to thoughtful touches, each detail
                enhances your stay. Plus, our commitment to the environment
                shines through with solar geysers, ensuring a sustainable and
                eco-friendly experience for our guests.
              </li>
              <li>
                <span className="text-bold">Sustainability: </span> we're
                dedicated to sustainability. Using eco-friendly products,
                reducing waste, and implementing green practices, we minimize
                our environmental impact. For hygiene, please note restrictions
                on larger gatherings and parties. Your comfort and well-being
                are our top priorities.
              </li>
            </ul>
          </div>
          </Fade>
        </section>
      </main>

    </>
  );
};

export default About;
