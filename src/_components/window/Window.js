import React from "react";
import { PlayProvider } from "_utils/_general/PlayContext";

import './Window.css';

const Window = ({ children, small = false, hasPlayContext = false }) => {
  return (
    <main className="Window" style={{ width: small ? '75%' : '90%' }}>
      {hasPlayContext
        ? <PlayProvider>{children}</PlayProvider>
        : children}
    </main>
  );
};

export default Window;