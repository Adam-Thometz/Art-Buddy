import React from "react";

import './Options.css';

const Options = ({ children, width = '100%' }) => {
  return (
    <div className="Options" style={{width}}>
      {children}
    </div>
  );
};

export default Options;