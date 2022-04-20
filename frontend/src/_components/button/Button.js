import React from "react";

import './Button.css'

const Button = ({ children, borderColor, onClick, small, icon }) => {
  const styles = {
    borderColor,
    fontSize: small ? '1rem' : '2rem'
  }
  return (
    <div className="Button" onClick={onClick} style={styles}>
      {children}
    </div>
  );
};

export default Button;