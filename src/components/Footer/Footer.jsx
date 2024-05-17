import React from "react";
import "./Footer.css";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import logo from "../../assests/logo2.png"
import { Fade } from "react-reveal";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <Fade bottom cascade duration={1000}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <p>Step into a haven of warmth and tranquility</p>
        </Fade>
        <div className="footerContainer">
          <Fade left cascade duration={1000}>
          <div className="footerContainer_left">
            <h2>Address</h2>
            <div className="line"></div>
            <div className="footerContainer_left_iconBox">
              <div className="footerContainer_left_iconBox_icon">
                <MdLocationOn fontSize={30} />
                <p>Canal road, jakhan, Dehradun Uttarakhand.</p>
              </div>
              <div className="footerContainer_left_iconBox_icon">
                <FaPhoneAlt fontSize={30} />
                <p>9999999999</p>
              </div>
              <div className="footerContainer_left_iconBox_icon">
                <MdEmail fontSize={30} />
                <p>xyz@email.com</p>
              </div>
            </div>
          </div>
          </Fade>
          <Fade right cascade duration={1000}>
          <div className="footerContainer_right">
            <div className="footerContainer_right_iframeBox">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13770.089382956752!2d78.0749752!3d30.3645221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7db18ed3c29%3A0x796bb2c224c59fb!2sCanal%20Homestay!5e0!3m2!1sen!2sin!4v1705730095750!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="myLocation"
              ></iframe>
            </div>
          </div>
          </Fade>
        </div>
        <div className="footer_copyright">
          <p>Copyrights <FaRegCopyright/> The Canal Homestay. All Rights Reserved </p>
        </div>
       
      </section>
    </>
  );
};

export default Footer;
