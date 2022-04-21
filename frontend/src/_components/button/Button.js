import React from "react";

import './Button.css'

const Button = ({ children, borderColor, onClick, small = false, selected = false, icon = null }) => {
  const smallStyles = {
    fontSize: '1rem',
    border: '3px solid',
    margin: '2%',
    padding: '2%',
    color: selected ? 'white' : 'black',
    backgroundColor: selected ? 'black' : 'white',
    borderColor
  }

  return (
    <span className="Button" onClick={onClick} style={small ? {...smallStyles, borderColor} : {borderColor}}>
      {icon ? <img src={icon} alt='' /> : null}
      {children}
    </span>
  );
};

export default Button;