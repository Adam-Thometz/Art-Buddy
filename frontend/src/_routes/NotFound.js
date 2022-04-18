import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../_components/button/Button";

import colors from "../_components/button/colorOrder";

const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/')
  }
  return (
    <div className="NotFound">
      <h1>UH OH!</h1>
      <p>Are you lost? We couldn't find the page you were looking for</p>
      <Button onClick={goHome} outlineColor={colors[0]}>RETURN TO HOME PAGE</Button>
    </div>
  );
};

export default NotFound;