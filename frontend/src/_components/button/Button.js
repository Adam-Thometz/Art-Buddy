import React from "react";

import './Button.css'

const Button = ({ children, borderColor, onClick, small = false, selected = false, icon = null }) => {
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