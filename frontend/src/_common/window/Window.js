import React from "react";

import './Window.css';

const Window = ({ children }) => {
  return (
    <div className="Window">
      {children}
    </div>
  );
};

export default Window;