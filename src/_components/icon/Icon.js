import React from "react";

import './Icon.css';

const Icon = ({ 
  id = null,
  icon,
  largeFont = false,
  onClick = null,
  otherImgStyles = {},
  size = "250px",
  text,
  width = null
}) => {
  const imgStyles = {
    height: size,
    width: width ? width : size,
    cursor: onClick ? 'pointer' : null,
    ...otherImgStyles
  };

  const textStyles = {
    fontSize: largeFont ? '2.5rem' : (parseInt(size) <= 50 ? '1rem' : '1.75rem')
  };

  return (
    <figure className="Icon" onClick={onClick} id={id ? id : null}>
      <img style={imgStyles} src={icon} alt="" />
      <figcaption className="Icon-text" style={textStyles}>{text}</figcaption>
    </figure>
  );
};

export default Icon;