import React from "react";

import './Button.css'

const Button = ({ children, outlineColor, onClick }) => {
  return <button className="Button" onClick={onClick} style={{ borderColor: outlineColor }}>
    {children}
  </button>
}

export default Button;