import React from "react";

import './Welcome.css';

import Button from "../../_components/button/Button";

const Welcome = ({ setHasVisited }) => {
  const handleVisited = () => {
    setHasVisited(true);
  }
  return (
    <section className="Welcome">
      <article className="Welcome-description">
        <p>ARTBUDDY is a collection of fun and interactive fine arts games designed specifically with special education goals in mind</p>
        <p>Click below to get started</p>
      </article>
      <Button colorId={0} onClick={handleVisited}>LET'S GO!</Button>
    </section>
  );
};

export default Welcome;