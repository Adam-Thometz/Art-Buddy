import React from "react";

import './Clickable.css';

const Clickable = ({ icon, text, onClick, size = "250px", additionalClass = null }) => {
  const sizeStyle = {
    width: size,
    height: size
  };

  return (
    <div className={`Clickable${additionalClass ? " " + additionalClass : null}`} onClick={onClick}>
      <img style={sizeStyle} src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Clickable;