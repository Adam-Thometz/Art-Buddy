import React from "react";

import Point from "./Point";

const Points = ({ points }) => {
  const pointDisplay = [];
  for (let i = 1; i <= points; i++) {
    pointDisplay.push(i);
  };

  return (
    <div>
      {pointDisplay.map(num => (
        <Point num={num} />
      ))}
    </div>
  );
};

export default Points