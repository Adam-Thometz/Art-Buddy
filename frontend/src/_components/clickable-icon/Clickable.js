import React from "react";

import './Clickable.css';

const Clickable = ({ icon, text, onClick }) => {
  return (
    <div className="Clickable" onClick={onClick}>
      <img src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Clickable;