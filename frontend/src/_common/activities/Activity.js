import React from "react";
import { useNavigate } from "react-router-dom";

import './Activity.css';

const Activity = ({ name, img, url, activityType, description }) => {
  const navigate = useNavigate()
  return (
    <div className="Activity" onClick={() => navigate(url)}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Activity;