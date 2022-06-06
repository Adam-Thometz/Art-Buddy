import React from "react";

import './Window.css';

const Window = ({ children, small = false }) => {

  return (
    <main className="Window" style={{ width: small ? '75%' : '90%' }}>
      {children}
    </main>
  );
};

export default Window;