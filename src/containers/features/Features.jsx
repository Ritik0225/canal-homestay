import React from 'react'
import "./features.css"

import { MdOutlineSecurity } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { IoMdPaw } from "react-icons/io";
import { Fade } from 'react-reveal';

const Features = () => {
  return (
    <>
     <section className="features">
      <Fade bottom cascade duration={1000}>
        <h1>Featured Facilities</h1>
        <p>ALL YOU NEED RIGHT AT HOME</p>
        </Fade>
        <Fade bottom cascade duration={1500}>
        <div className="features_cardContainer">
          <div className="features_cardContainer-card">
            <div className="features_cardContainer-card_icon">
              <MdOutlineSecurity fontSize={80}  />
              <h2>24/7 Security</h2>
            </div>
            <div className="features_cardContainer-card_subtext">
              <p>
                We take safety seriously through our dedicated team that stands
                watch.
              </p>
            </div>
          </div>

          <div className="features_cardContainer-card">
            <div className="features_cardContainer-card_icon">
              <FaWifi fontSize={80}  />
              <h2>Free Wifi</h2>
            </div>
            <div className="features_cardContainer-card_subtext">
              <p>
                All rooms have good high speed Wi-fi connectivity. watch. 24/7
              </p>
            </div>
          </div>

          <div className="features_cardContainer-card">
            <div className="features_cardContainer-card_icon">
              <LuChefHat fontSize={80} />
              <h2>In House Menu Card</h2>
            </div>
            <div className="features_cardContainer-card_subtext">
              <p>
                Craft your own small delights in our kitchen, adding a personal
                touch to your stay.
              </p>
            </div>
          </div>

          <div className="features_cardContainer-card">
            <div className="features_cardContainer-card_icon">
              <IoMdPaw fontSize={80} />
              <h2>Pet Friendly</h2>
            </div>
            <div className="features_cardContainer-card_subtext">
              <p>
                Because we adore them as much as you do, pets are warmly
                welcomed to share the love in our homestay.
              </p>
            </div>
          </div>
        </div>
        </Fade>
      </section>
</>
  )
}

export default Features
