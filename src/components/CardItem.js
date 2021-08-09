import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <div>
      {/* Card Item */}
      <li className="card-item">
        {/* Card Item Link */}
        <Link to={props.path} className="card-item-link">
          {/* Card Item Picture */}
          <figure image-category={props.category} className="card-item-picture">
            {/* Card Item Image */}
            <img src={props.src} alt="Nature" className="card-item-image"></img>
          </figure>
          {/* Card Item Text */}
          <div className="card-item-text">
            <p>{props.text}</p>
          </div>
        </Link>
      </li>
    </div>
  )
}

export default CardItem;
