import React from 'react';
import '../../App.css';
import './Article.css';
import SingleArticle from './SingleArticle';
import cozy from '../../images/nature-image-4.jpg';
import calming from '../../images/nature-image-5.jpg';
import comfortable from '../../images/nature-image-6.jpg';

function Article() {
  return (
    <div>
      <h1 className="articles">Articles</h1>
      <ul className="article-content-list">
        <SingleArticle title="We admire the beauty of nature" category="cozy" image={cozy}></SingleArticle>
        <SingleArticle className="nth-child" title="Slow down and enjoy the simple pleasures in life" category="calming" image={calming}></SingleArticle>
        <SingleArticle title="Nature is not a place to visit, It is home" category="comfortable" image={comfortable}></SingleArticle>
      </ul>
    </div>
  )
}

export default Article;
