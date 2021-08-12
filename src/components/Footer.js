import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer">
        {/* Footer Section */}
        <section className="footer-section">
          <h1>Sign Up</h1>
          <p>Subscribe to our newsletter</p>
          {/* Sign Up Form */}
            <form className="sign-up-form">
              {/* Email Input */}
              <input type="email" className="email-input" placeholder="enter email"></input>
              <Link to="/signup">
                <Button button_style="basic-button">Submit</Button>
              </Link>
            </form>
        </section>
      </div>
      {/* Footer Link */}
      <div className="footer-link">
        {/* Footer Icons */}
        <div className="footer-icons">
          <i className="fab fa-google-plus-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-facebook-square"></i>
          <i className="fas fa-share-alt"></i>
        </div>
        {/* Footer Page */}
        <div className="footer-page">
          <Link to="/articles" className="page-link">Articles</Link>
          <Link to="/services"className="page-link">Services</Link>
          <Link to="/signup"className="page-link">Sign Up</Link>
        </div>
    </div>
  </>
  )
}

export default Footer;
