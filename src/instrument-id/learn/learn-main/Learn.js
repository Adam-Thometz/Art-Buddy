import React from "react";
import { useNavigate } from "react-router-dom";

import './Learn.css';

import Icon from "../../../_components/icon/Icon";

import learnMenuOptions from "./learnMenuOptions";

const Learn = () => {
  const navigate = useNavigate()

  return (
    <div className="Learn">
      <div className="Learn-header">
        <p>To begin, choose an instrument family</p>
      </div>
      <div className="Learn-options">
        {learnMenuOptions.map(option => (
          <Icon
            onClick={() => navigate(option.url)}
            icon={option.icon}
            text={option.name}
            size="200px"
          />
        ))}
      </div>
    </div>
  );
};

export default Learn;