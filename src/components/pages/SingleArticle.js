import React from 'react';
import './SingleArticle.css';

function SingleArticle({title, category, image}) {
  return (
    <div className="single-article">
      <li className="single-article-list-item">
        <div className="article-info">
          <h2>{title}</h2>
          <span>{category}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae voluptatem excepturi animi perferendis laboriosam cupiditate voluptatibus ut nemo repudiandae, architecto corrupti esse, quisquam, libero ullam quam provident! Quidem, quas.
          </p>
        </div>
        <div className="article-image">
          <img src={image} alt="article 이미지"></img>
        </div>
      </li>
    </div>
  )
}

export default SingleArticle;
