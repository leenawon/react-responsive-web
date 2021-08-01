import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleMenuClick = () => setClick(!click);
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
          <div className="nav-menu" onClick={handleMenuClick}>
          <i className={click ? "fas fa-minus-circle" : "fas fa-chevron-circle-down"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
