import React from 'react';
import '../../App.css';
import HeroImage from '../HeroImage';
import ImageCard from '../ImageCard';

function HomePage() {
  return (
    <div>
      {/* HeroImage Component */}
      <HeroImage></HeroImage>
      {/* Image Card Component */}
      <ImageCard></ImageCard>
    </div>
  )
}

export default HomePage;
