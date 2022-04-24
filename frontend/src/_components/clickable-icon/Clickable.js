import React from "react";

import './Clickable.css';

const Clickable = ({ icon, text, onClick }) => {
  return (
    <div className="Clickable" onClick={onClick} title={text.toLowerCase()}>
      <img src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Clickable;