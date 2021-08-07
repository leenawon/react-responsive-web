import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleMenuClick = () => setClick(!click);
  const closeNavMenu = () => setClick(false);
  const displayButton = () => {
    return (window.innerWidth <= 960) ? setButton(false) : setButton(true);
  }

  useEffect(() => {
    displayButton();
  }, []);

  window.addEventListener('resize', displayButton);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Nav Bar Logo */}
          <Link to="/" className="nav-logo" onClick={closeNavMenu}>
            <i className="fas fa-quote-left"></i>
            Nature
            <i className="fas fa-quote-right"></i>
          </Link>
          {/* Nav Bar Menu Icon */}
          <div className="nav-menu-icon" onClick={handleMenuClick}>
            <i className={click ? "fas fa-minus-circle" : "fas fa-chevron-circle-down"}></i>
          </div>
          {/* Nav Menu List */}
          <ul className={click ? "nav-menu-list active" : "nav-menu-list"}>
            {/* Nav Menu Item */}
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
              <Link to="/signup" className="sign-up-links" onClick={closeNavMenu}>
                Sign up
              </Link>
            </li>
          </ul>
          {/* Button Component */}
          {
            button && <Link to="/signup">
              <Button button_style="outline-button">Sign up</Button>
            </Link>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
