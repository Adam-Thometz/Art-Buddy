import React from "react";
import WindowNavbar from "../window-nav/WindowNavbar";

import './Window.css';

const Window = ({ children, icon = null, iconText = null, page = null, small = false }) => {
  const windowNav = !page ? (
      <WindowNavbar />
    ) : (
      <WindowNavbar page={page} icon={icon} iconText={iconText} />
    )

  return (
    <div className="Window" style={{ width: small ? '75%' : '90%' }}>
      {windowNav}
      {children}
    </div>
  );
};

export default Window;