import React, { createContext, useState } from "react";

const ControlBarContext = createContext();

const ControlBarProvider = ({ children }) => {
  const [shownOptions, setShownOptions] = useState(null);

  return (
    <ControlBarContext.Provider value={{ shownOptions, setShownOptions }}>
      {children}
    </ControlBarContext.Provider>
  );
};

export { ControlBarContext, ControlBarProvider };