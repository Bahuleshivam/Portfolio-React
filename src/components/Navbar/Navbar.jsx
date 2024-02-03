import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/navbar.css';

const Navbar = ({ handleLinkClick, activeLink }) => {

  const [isMobile, setIsMobile] = useState(false);

  const handleHamburgerClick = () => {
    setIsMobile(!isMobile);
  };

  const handleClickFunction = (link) => {
    setIsMobile(false)
    handleLinkClick(link)
  }


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`heading navbar-brand ${activeLink === 'about' ? '' : ''} `}>

          <Link className="nav-name" to="/" onClick={() => handleClickFunction('about')}>
            <span className='arr1'>&#60;</span> SHIVAM / <span className='arr2'>&#62;</span>
          </Link>


        </div>
        <div className={isMobile ? 'mobile' : 'navbar-collapse'}>
          <ul className={isMobile ? "mobile-ul" : "navbar-nav"}>
            <li className={`nav-item whenHover ${activeLink === 'about' ? 'active' : ''}`}>
              <Link
                className="nav-link link"
                to="/"
                onClick={() => handleClickFunction('about')}
              >
                About
              </Link>
            </li>
            <li className={`nav-item whenHover ${activeLink === 'projects' ? 'active' : ''}`}>
              <Link
                className="nav-link link"
                to="/Projects"
                onClick={() => handleClickFunction('projects')}
              >
                Projects
              </Link>
            </li>
            <li className={`nav-item whenHover ${activeLink === 'contact' ? 'active' : ''}`}>
              <Link
                className="nav-link link"
                to="/Contact"
                onClick={() => handleClickFunction('contact')}
              >
                Contact
              </Link>
            </li>
            <li className={`nav-item whenHover ${activeLink === 'skills' ? 'active' : ''}`}>
              <Link
                className="nav-link link"
                to="/Skills"
                onClick={() => handleClickFunction('skills')}
              >
                Skills
              </Link>
            </li>
          </ul>
          

        </div>
        <div className="hamburger" onClick={handleHamburgerClick}>
            <div className={isMobile ? "bar active" : "bar"}></div>
            <div className={isMobile ? "bar active" : "bar"}></div>
            <div className={isMobile ? "bar active" : "bar"}></div>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
