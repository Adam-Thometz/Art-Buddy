import React from "react";
import { useNavigate } from "react-router-dom";

import './Learn.css';

import Button from "../../../_components/button/Button";
import Icon from "../../../_components/icon/Icon";
import Options from "../../../_components/option/Options";

import learnMenuOptions from "./learnMenuOptions";

const Learn = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/instrument-id')
  }

  return (
    <div className="Learn">
      <Button small colorId={3} onClick={goBack}>GO BACK</Button>
      <h1>This is the LEARN page</h1>
      <p>Pick an instrument family to learn more</p>
      <Options>
        {learnMenuOptions.map(option => (
          <Icon onClick={() => navigate(option.url)} icon={option.icon} text={option.name} />
        ))}
      </Options>
    </div>
  );
};

export default Learn;