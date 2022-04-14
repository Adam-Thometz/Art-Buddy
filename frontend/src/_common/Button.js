import React from "react";

import './Button.css'

const Button = ({ text, outlineColor, onClick }) => {
  const buttonStyle = { borderColor: outlineColor }
  return <button
    className="Button"
    onClick={onClick}
    style={buttonStyle}>
      {text}
    </button>
}

export default Button;