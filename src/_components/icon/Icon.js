import React from "react";

import './Icon.css';

const Icon = ({ icon, text, onClick = null, size = "250px", width = null, largeFont = false,  id = null }) => {
  const imgStyles = {
    height: size,
    width: width ? width : size,
    cursor: onClick ? 'pointer' : null
  };

  const textStyles = {
    fontSize: largeFont ? '2.5rem' : (parseInt(size) <= 50 ? '1rem' : '1.75rem')
  };

  return (
    <div className="Icon" onClick={onClick} id={id ? id : null}>
      <img style={imgStyles} src={icon} alt="" />
      <p style={textStyles}>{text}</p>
    </div>
  );
};

export default Icon;