import React from "react";

import './Window.css';

const Window = ({ children, smallWindow = false }) => {
  return (
    <div className="Window" style={{ width: smallWindow ? '75%' : '90%' }}>
      {children}
    </div>
  );
};

export default Window;