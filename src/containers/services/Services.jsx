import React from "react";
import "./services.css";
import washroom from "../../assests/pic6.jpg";
import { FaStar } from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import { PiToiletFill } from "react-icons/pi";
import { Fade } from "react-reveal";

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="servicesContainer">
          <Fade left cascade duration={1000}>
          <div className="servicesContainer_left">
            <h2>SERVICES & AMENITIES</h2>
            <h4>
              Step into our lavish hotel, where we delight in offering
              outstanding services and comforts to make your stay cozy and
              unforgettable. From delectable dining choices to serene rooms,
              we've got all the ingredients for a truly pampering experience.
            </h4>
            <div className="line"></div>
          </div>
          </Fade>

          <Fade duration={2000}>
          <div className="servicesContainer_middle">
            <img src={washroom} alt="washroom" />
          </div>
          </Fade>
          <Fade right cascade duration={1000}>
          <div className="servicesContainer_right">
            <div className="servicesContainer_right_box">
              <div className="servicesContainer_right_box-icon">
                <FaStar fontSize={60}/>
              </div>
              <div className="servicesContainer_right_box-text">
                <h2>Ammenities</h2>
                <p>Free Wi-Fi & Room Service</p>
              </div>
            </div>
            <div className="servicesContainer_right_box">
              <div className="servicesContainer_right_box-icon">
                <MdBedroomParent fontSize={60}/>
              </div>
              <div className="servicesContainer_right_box-text">
                <h2>Room Features</h2>
                <p>
                  Charging Points, Intercom, Mirror, Hangers, Chair, Table,
                  Curtains, TV, Fan, Cushions, Kettle, Blanket, Pillows ETC
                </p>
              </div>
            </div>
            <div className="servicesContainer_right_box">
              <div className="servicesContainer_right_box-icon">
                <PiToiletFill fontSize={60}/>
              </div>
              <div className="servicesContainer_right_box-text">
                <h2>Washroom Features</h2>
                <p>
                  Toiletries, Western Toilet Seat, Dustbins, Toilet Paper, Hot &
                  Cold Water, Shower, Towels
                </p>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Services;
