import React from "react";

import './Window.css';

const Window = ({ children, small = false }) => {
  return (
    <div className="Window" style={{ width: small ? '75%' : '90%' }}>
      {children}
    </div>
  );
};

export default Window;