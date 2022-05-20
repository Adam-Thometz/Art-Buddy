import React from "react";

import './Icon.css';

const Icon = ({ icon, text, onClick = null, size = "250px", id = null }) => {
  const imgStyles = {
    width: size,
    height: size,
    cursor: onClick ? 'pointer' : null
  };

  const textStyles = {
    fontSize: parseInt(size) <= 50 ? '.75rem' : null
  };

  return (
    <div className="Icon" onClick={onClick} id={id ? id : null}>
      <img style={imgStyles} src={icon} alt="" />
      <p style={textStyles}>{text}</p>
    </div>
  );
};

export default Icon;