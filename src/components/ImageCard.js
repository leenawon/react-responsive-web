import React from 'react';
import CardItem from './CardItem';
import './ImageCard.css';
import cozy from '../images/nature-image-4.jpg';
import calming from '../images/nature-image-5.jpg';
import comfortable from '../images/nature-image-6.jpg';

function ImageCard() {
  return (
    <div className="image-card">
      <h1>LATEST ARTICLES</h1>
      {/* Card Container */}
      <div className="card-container">
        {/* Card Wrapper */}
        <div className="card-wrapper">
          {/* Card List */}
          <ul className="card-list">
            {/* CardItem Component */}
            <CardItem src={cozy} text="We admire the beauty of nature" category="cozy" path="/articles"></CardItem>
            <CardItem src={calming} text="Slow down and enjoy the simple pleasures in life" category="calming" path="/articles"></CardItem>
            <CardItem src={comfortable} text="Nature is not a place to visit, It is home" category="comfortable" path="/articles"></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ImageCard;
