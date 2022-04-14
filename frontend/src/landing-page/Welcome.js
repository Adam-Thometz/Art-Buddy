import React from "react";

import './Welcome.css';

import Button from "../_common/Button";

const Welcome = ({ setHasVisited }) => {
  const handleVisited = () => {
    setHasVisited(true);
  }
  return (
    <div className="Welcome">
      <h1>Welcome to ARTBUDDY!</h1>
      <div className="Welcome-description">
        <p>ARTBUDDY is a collection of fun and interactive fine arts games designed specifically with special education goals in mind</p>
        <p>Click below to get started</p>
        <Button outlineColor={'#89EB0A'} onClick={handleVisited} text={"Let's Go!"} />
      </div>
    </div>
  );
};

export default Welcome;