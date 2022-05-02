import React from "react";
import WindowNavbar from "../window-nav/WindowNavbar";

import './Window.css';

const Window = ({ page = null, children, small = false }) => {
  const createNav = () => (
    !page ? (
      <WindowNavbar />
    ) : (
      <WindowNavbar page={page} />
    )
  )
  return (
    <div className="Window" style={{ width: small ? '75%' : '90%' }}>
      {createNav()}
      {children}
    </div>
  );
};

export default Window;