import React from 'react';
import '../../App.css';
import HeroImage from '../HeroImage';
import ImageCard from '../ImageCard';
import Footer from '../Footer';

function HomePage() {
  return (
    <div>
      {/* HeroImage Component */}
      <HeroImage></HeroImage>
      {/* Image Card Component */}
      <ImageCard></ImageCard>
      {/* Footer Component */}
      <Footer></Footer>
    </div>
  )
}

export default HomePage;
