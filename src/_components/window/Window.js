import React from "react";
import WindowNavbar from "../window-nav/WindowNavbar";

import './Window.css';

const Window = ({ children, cornerIcon = null, page = null, small = false }) => {
  const windowNav = !page ? (
      <WindowNavbar />
    ) : (
      <WindowNavbar page={page} cornerIcon={cornerIcon} />
    )

  return (
    <div className="Window" style={{ width: small ? '75%' : '90%' }}>
      {windowNav}
      {children}
    </div>
  );
};

export default Window;