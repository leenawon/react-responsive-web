import React from 'react';
import { Button } from './Button';
import './HeroImage.css';
import '../App.css';
import { Link } from 'react-router-dom';

function HeroImage() {
  return (
    <div className="hero">
      <h1>Green Space</h1>
      <p>The calming power of nature</p>
      {/* Hero Button */}
      <div className="hero-buttons">
        {/* Button Component */}
        <Link to ="/articles" className="hero-button">
          <Button className="button" button_style="outline-button" button_size="large-button">
              Calming Place
          </Button>
        </Link>
        <Link to="/services" className="hero-button">
          <Button className="button" button_style="basic-button" button_size="large-button">
              Experience
          </Button>
        </Link>
        
      </div>
    </div>
  )
}

export default HeroImage;
