import React from "react";
import './Point.css'

const Point = ({num, color}) => {
  const backgroundColor = color;
  return (
    <div data-testid='point' className="Point" style={{backgroundColor}}>
      {num}
    </div>
  );
};

export default Point;