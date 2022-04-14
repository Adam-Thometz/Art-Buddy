import React from "react";

import './Button.css'

const Button = ({ children, outlineColor, onClick }) => {
  const buttonStyle = { borderColor: outlineColor }
  return <button className="Button" onClick={onClick} style={buttonStyle}>
    {children}
  </button>
}

export default Button;