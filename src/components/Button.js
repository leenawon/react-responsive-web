import React from 'react';
import './Button.css';

// Button Style & Button Size
const BUTTON_STYLE = ["basic-button", "outline-button"];
const BUTTON_SIZE = ["medium-button", "large-button"];

export const Button = ({children, type, onClick, button_style, button_size
}) => {
  const buttonStyle = BUTTON_STYLE.includes(button_style) ? button_style : BUTTON_STYLE[0];
  const buttonSize = BUTTON_SIZE.includes(button_size) ? button_size : BUTTON_SIZE[0];

  return (
    <button type={type} className={`button ${buttonStyle} ${buttonSize}`} onClick={onClick}>
      {children}
    </button>
  )
};