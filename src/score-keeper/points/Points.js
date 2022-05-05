import React from "react";

import Point from "./Point";

const Points = ({ points, color }) => {
  const pointDisplay = [];
  for (let i = 1; i <= points; i++) {
    pointDisplay.push(i);
  };

  return (
    <div data-testid='points'>
      {pointDisplay.map(num => (
        <Point num={num} color={color} />
      ))}
    </div>
  );
};

export default Points