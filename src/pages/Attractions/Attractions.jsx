import React from "react";
import "./Attractions.css";
import sahastradhara from "../../assests/pic8.jpg";
import fri from "../../assests/pic10.jpg";
import robbersCave from "../../assests/pic9.jpg";
import tapkeshwar from "../../assests/pic11.jpeg";
import deerPark from "../../assests/pic13.jpg";
import buddhaTemple from "../../assests/pic12.jpg";
import { Fade } from "react-reveal";

const Attractions = () => {
  return (
    <>
      <header className="attractionsHeader">
        <h1>ATTRACTIONS</h1>
      </header>
      <main>
        <section className="attractionsMainSection1">
          <Fade bottom duration={1000}>
            <h2>Explore Dehradun and Beyond: Unveiling Nearby Wonders</h2>
            <p>
              "Explore the captivating charm of Dehradun, where nature and
              culture unite in a perfect blend."
            </p>
          </Fade>
          <div>
            <Fade bottom cascade duration={1000}> 
            <div className="attractionsMainSection1_container">
              <div className="attractionsMainSection1_container_imgBox">
                <img src={fri} alt="Forest Research Institute" />
              </div>
              <div className="attractionsMainSection1_container_infoBox">
                <h2>FRI - Forest Research Institute</h2>
                <p>
                  Explore FRI, Dehradun—an architectural gem, botanical haven,
                  and hub of forestry research. Unwind in its serene ambiance,
                  discover cultural insights, and enjoy a delightful blend of
                  nature and history.
                </p>
              </div>
            </div>
            </Fade>
            <Fade bottom duration={1000}>
            <div className="attractionsMainSection1_container">
              <div className="attractionsMainSection1_container_imgBox">
                <img src={sahastradhara} alt="Sahastradhara" />
              </div>
              <div className="attractionsMainSection1_container_infoBox">
                <h2>Sahastradhara</h2>
                <p>
                  Indulge in nature's beauty at Sahastradhara, Dehradun. Known
                  for therapeutic springs and cascading waterfalls, it's a
                  perfect retreat for tranquility and rejuvenation. Immerse
                  yourself in the soothing ambiance of this natural wonder.
                </p>
              </div>
            </div>
            </Fade>
            <Fade bottom duration={1000}>
            <div className="attractionsMainSection1_container">
              <div className="attractionsMainSection1_container_imgBox">
                <img src={tapkeshwar} alt="Tapkeshwar mahadev temple" />
              </div>
              <div className="attractionsMainSection1_container_infoBox">
                <h2>Tapkeshwar</h2>
                <p>
                  Tapkeshwar, Dehradun, invites you to a sacred retreat. Nestled
                  in a cave with a natural waterfall, this revered Shiva temple
                  offers a spiritual haven and a serene escape into nature's
                  embrace.
                </p>
              </div>
            </div>
            </Fade>
            <Fade bottom duration={1000}>
            <div className="attractionsMainSection1_container">
              <div className="attractionsMainSection1_container_imgBox">
                <img src={robbersCave} alt="Robbers Cave" />
              </div>
              <div className="attractionsMainSection1_container_infoBox">
                <h2>Robber's Cave</h2>
                <p>
                  Embark on an enchanting journey to Robber's Cave, Dehradun.
                  Explore this scenic river cave with its mesmerizing landscapes
                  and natural beauty. A perfect destination for those seeking
                  tranquility and a touch of adventure.
                </p>
              </div>
            </div>
            </Fade>
            <Fade bottom duration={1000}>
            <div className="attractionsMainSection1_container">
              <div className="attractionsMainSection1_container_imgBox">
                <img src={buddhaTemple} alt="Mindrolling Monastery" />
              </div>
              <div className="attractionsMainSection1_container_infoBox">
                <h2>Mindrolling Monastery</h2>
                <p>
                  Step into tranquility at Mindrolling Monastery, Dehradun.
                  Admire the exquisite Tibetan Buddhist architecture, soak in
                  the serene ambiance, and experience a spiritual retreat
                  surrounded by beauty and cultural richness.
                </p>
              </div>
            </div>
            </Fade>
            <Fade bottom duration={1000}>
            <div className="attractionsMainSection1_container">
              <div className="attractionsMainSection1_container_imgBox">
                <img src={deerPark} alt="Malsi Deer Park" />
              </div>
              <div className="attractionsMainSection1_container_infoBox">
                <h2>Malsi Deer Park</h2>
                <p>
                  Discover the charm of wildlife at Malsi Deer Park, Dehradun.
                  Home to a variety of deer species and lush landscapes, this
                  park offers a delightful escape into nature. Perfect for a
                  leisurely stroll and connecting with the local fauna.
                </p>
              </div>
            </div>
          </Fade>
          </div>
        </section>
      </main>
    </>
  );
};

export default Attractions;
