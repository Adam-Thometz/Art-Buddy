import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../_components/button/Button";

const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  }
  return (
    <div className="NotFound">
      <p>Are you lost? We couldn't find the page you were looking for</p>
      <Button onClick={goHome} colorId={0}>RETURN TO HOME PAGE</Button>
    </div>
  );
};

export default NotFound;