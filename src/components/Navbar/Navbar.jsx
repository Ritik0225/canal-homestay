import React from 'react'
import "./Navbar.css"
import logo from "../../assests/logo2.png"
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'

const Navbar = () => {
  return (
    <>
      <Fade cascade duration={1500}>
      <nav className='navbar'>
        <div className='navbar_imgBox'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='navbar_navLinks'>
          <ul>
            <Link to={"./"}><li>Home</li></Link>
            <Link to={"/about"}><li>About</li></Link>
            <Link to={"/attraction"}><li>Attractions</li></Link>
          </ul>
        </div>
      </nav>
      </Fade>
    </>
  )
}

export default Navbar
