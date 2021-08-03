import React from 'react';
import { Link } from 'react-router-dom';

// Button Style & Button Size
const BUTTON_STYLE = ["basic-button", "outline-button"];
const BUTTON_SIZE = ["medium-button", "large-button"];

export const Button = ({name, type, onClick, style, size
}) => {
  const buttonStyle = BUTTON_STYLE.includes(style) ? style : BUTTON_STYLE[0];
  const buttonSize = BUTTON_SIZE.includes(size) ? size : BUTTON_SIZE[0];

  return (
    <Link to="/signup" className="button">
      <button type={type} className={`button ${buttonStyle} ${buttonSize}`} onClick={onClick}>
        {name}
      </button>
    </Link>
  )
};