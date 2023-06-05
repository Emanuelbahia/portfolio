import { useState } from 'react';
import { Link } from "react-scroll";
import pdf from "../../../public/images/Emanuel Azcona cv.pdf"
import "./header.css";

function Header() {

  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!clicked);
  }

  return (

      <div className='header'> 
        <div onClick={handleClick} className={`icon nav-icon-5 ${clicked ? "open" : ""} `}  >
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div className={`div-links ${clicked ? "active" : ""} `}>
        <Link className={`navbar-link  ${clicked ? "open" : ""} `} onClick={handleClick}  to="about">
          <div>
            <span className='span-link'>01.</span> 
            <p className="p-link">About</p>
          </div>
        </Link>
        <Link className={`navbar-link  ${clicked ? "open" : ""} `} onClick={handleClick}  to="skills">
          <div>
            <span className='span-link'>02.</span> 
            <p className="p-link">Skills</p>
          </div>
        </Link>
        <Link className={`navbar-link  ${clicked ? "open" : ""} `} onClick={handleClick}  to="projects">
          <div>
          <span className='span-link'>03.</span> 
          <p className="p-link">Projects</p>
          </div>
        </Link>
        <Link className={`navbar-link  ${clicked ? "open" : ""} `} onClick={handleClick}  to="contact">
          <div>
            <span className='span-link'>04.</span> 
            <p className="p-link">Contact</p>
          </div>
        </Link>
        <button className="button-cv-cel">
          <a href={pdf} target="_blank" rel="noopener noreferrer" className='link-resume' > 
            Resume
          </a>
        </button>
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
          <button className="button-cv-tablet">
            <a href={pdf} target="_blank" rel="noopener noreferrer" className='link-resume'  > 
              Resume 
            </a>
          </button>       
      </div> 
    </div> 
  )
}

export default Header;