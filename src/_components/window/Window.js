import React from "react";

import './Window.css';

const Window = ({ children, small = false }) => {
  const width = small ? '75%' : '90%';
  return (
    <main className="Window" style={{ width }}>
      {children}
    </main>
  );
};

export default Window;