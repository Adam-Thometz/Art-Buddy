import React from "react";

import './Welcome.css';

import Button from "../../_components/button/Button";

import colors from "../../_components/button/colorOrder";

const Welcome = ({ setHasVisited }) => {
  const handleVisited = () => {
    setHasVisited(true);
  }
  return (
    <div className="Welcome">
      <h1>WELCOME TO ARTBUDDY!</h1>
      <div className="Welcome-description">
        <p>ARTBUDDY is a collection of fun and interactive fine arts games designed specifically with special education goals in mind</p>
        <p>Click below to get started</p>
      </div>
      <Button borderColor={colors[0]} onClick={handleVisited}>LET'S GO!</Button>
    </div>
  );
};

export default Welcome;