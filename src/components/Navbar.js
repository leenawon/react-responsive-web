import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleMenuClick = () => setClick(!click);
  const closeNavMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Nav Bar Logo */}
          <Link to="/" className="nav-logo">
            <i className="fas fa-quote-left"></i>
            Nature
            <i className="fas fa-quote-right"></i>
          </Link>
          {/* Nav Bar Menu Icon */}
          <div className="nav-menu-icon" onClick={handleMenuClick}>
            <i className={click ? "fas fa-minus-circle" : "fas fa-chevron-circle-down"}></i>
          </div>
          <ul className={click ? "nav-menu-list active" : "nav-menu-list"}>
            <li className="nav-menu-item">
              <Link to="/" className="menu-links" onClick={closeNavMenu}>
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/articles" className="menu-links" onClick={closeNavMenu}>
                Articles
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/services" className="menu-links" onClick={closeNavMenu}>
                Services
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/signup" className="menu-links" onClick={closeNavMenu}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
