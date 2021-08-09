import React from 'react';
import CardItem from './CardItem';
import './ImageCard.css';

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
            <CardItem src="https://cdn.pixabay.com/photo/2017/09/16/16/08/lake-2755907__340.jpg" text="We admire the beauty of nature" category="calming" path="/articles"></CardItem>
            <CardItem src="https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519__340.jpg" text="Slow down and enjoy the simple pleasures in life" category="cozy" path="/articles"></CardItem>
            <CardItem src="https://cdn.pixabay.com/photo/2019/07/14/10/48/river-4336788__340.jpg" text="Nature is not a place to visit, It is home" category="comfortable" path="/articles"></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ImageCard;
