import React from 'react'
import "./attraction.css"
import mussoorie from "../../assests/pic5.jpg"
import { Fade } from 'react-reveal'

const Attraction = () => {
  return (
    <>
      <section className='attraction'>
        <div className='attractionContainer'>
          <div className='attractionContainer'></div>
          <Fade left cascade duration={1000}>
          <div className='attractionContainer_left'>
            <h1>Your Stay to Mussoorie</h1>
            <h3>"THE QUEEN OF HILLS"</h3>
            <div className='line'></div>
            <p>Embark on a journey to Mussoorie, the Queen of Hills, where nature's beauty and tranquility crown the hills, promising an enchanting escape into serenity. Explore the scenic landscapes and relish the regal charm of this Himalayan gem.</p>
          </div>
          </Fade>
          <Fade right cascade duration={1000}>
          <div className='attractionContainer_right'>
            <div className='attractionContainer_right-imgBox'>
              <img src={mussoorie} alt='mussoorie hills'/>
            </div>
          </div>
          </Fade>
        </div>
      </section>
    </>
  )
}

export default Attraction
