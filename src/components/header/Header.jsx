import { useState } from 'react';
import { Link } from "react-scroll";
import "./header.css";
import HamburgerMenu from '../HamburgerMenu';

function Header() {

  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div className='header'> 
      
      <HamburgerMenu clicked={clicked} handleClick={handleClick} /> 
      
      <div className={`div-links ${clicked ? "active" : ""} `}>
        <Link className="navbar-link" to="about">
          <div>
            <span className='span-link'>01.</span> 
            <p className="p-link">About</p>
          </div>
        </Link>
        <Link className="navbar-link" to="skills">
          <div>
            <span className='span-link'>02.</span> 
            <p className="p-link">Skills</p>
          </div>
        </Link>
        <Link className="navbar-link" to="projects">
          <div>
          <span className='span-link'>03.</span> 
          <p className="p-link">Projects</p>
          </div>
        </Link>
        <Link className="navbar-link" to="contact">
          <div>
            <span className='span-link'>04.</span> 
            <p className="p-link">Contact</p>
          </div>
        </Link>
      </div>  
      <div className='nav'> 
          <Link className="navbar-link" to="about" smooth={true} offset={50} duration={300}>
              <p className='p-navbar'><span className='span-navbar'>01.</span> About</p>
          </Link>
          <Link className="navbar-link" to="skills" smooth={true} offset={50} duration={300}>
              <p className='p-navbar'><span className='span-navbar'>02.</span> Skills</p>
          </Link>
          <Link className="navbar-link" to="projects" smooth={true} offset={50} duration={300}>
              <p className='p-navbar'><span className='span-navbar'>03.</span> Projects</p>
          </Link>
          <Link className="navbar-link" to="contact" smooth={true} offset={50} duration={300}>
              <p className='p-navbar'><span className='span-navbar'>04.</span> Contact</p>
          </Link>           
      </div> 
    </div> 
  )
}

export default Header;