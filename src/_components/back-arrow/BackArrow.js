import React from "react";
import { useNavigate } from "react-router-dom";

import './BackArrow.css';

import arrow from './arrow.png'

const BackArrow = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1);
  }
  return (
    <div className="BackArrow" onClick={goBack}>
        <img src={arrow} alt="" />
        <span>BACK</span>
      </div>
  );
};

export default BackArrow;