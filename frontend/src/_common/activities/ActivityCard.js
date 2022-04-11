import React from "react";
import { useNavigate } from "react-router-dom";

import './ActivityCard.css';

const ActivityCard = ({ name, img, url, activityType, description }) => {
  const navigate = useNavigate();
  return (
    <div className="Activity" onClick={() => navigate(url)}>
      {/* <img src={img} alt={name} /> */}
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ActivityCard;