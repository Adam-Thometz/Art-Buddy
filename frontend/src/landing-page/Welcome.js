import React from "react";

import './Welcome.css';

const Welcome = ({ setHasVisited }) => {
  const handleVisited = () => {
    setHasVisited(true);
  }
  return (
    <div className="Welcome">
      <h1>Welcome to ARTBUDDY!</h1>
      <div className="Welcome-description">
        <p>Art Buddy is a collection of fun and interactive fine arts games designed specifically with special education goals in mind</p>
        <p>Click below to get started</p>
        <button onClick={handleVisited}>Let's Go!</button>
      </div>
    </div>
  );
};

export default Welcome;