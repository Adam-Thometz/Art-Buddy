import React from "react";

import './Button.css'

import colors from "./colorOrder";

const Button = ({ children, colorId, onClick, small = false, selected = false, icon = null }) => {
  const borderColor = colors[colorId]
  return (
    <span
      className={`Button ${small ? 'small' : 'regular'} ${selected ? 'selected' : null}`}
      onClick={onClick}
      style={{borderColor}}
    >
      {icon ? <img src={icon} alt='' /> : null}
      {children}
    </span>
  );
};

export default Button;