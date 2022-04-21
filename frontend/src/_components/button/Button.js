import React from "react";

import './Button.css'

const Button = ({ children, borderColor, onClick, small = false, selected = false, icon = null }) => {
  const styles = {
    borderColor,
    fontSize: small ? '1rem' : '2rem',
    border: small ? '5px solid' : '15px solid',
    margin: small ? '2%' : '5%',
    height: small ? '25px' : null,
    padding: small ? '2%' : '5%',
    color: selected ? 'white' : 'black',
    backgroundColor: selected ? 'black' : 'white'
  }

  return (
    <span className="Button" onClick={onClick} style={styles}>
      {icon ? <img src={icon} alt='' /> : null}
      {children}
    </span>
  );
};

export default Button;