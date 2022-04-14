import React from "react";

import './Window.css';

const Window = ({ children, customStyles = {} }) => {
  return (
    <div className="Window" style={customStyles}>
      {children}
    </div>
  );
};

export default Window;