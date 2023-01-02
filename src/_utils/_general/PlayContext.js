import React, { createContext, useState } from "react";

const PlayContext = createContext();

const PlayProvider = ({ children }) => {
  const [playFn, setPlayFn] = useState(null);

  return (
    <PlayContext.Provider value={{ playFn, setPlayFn }}>
      {children}
    </PlayContext.Provider>
  );
};

export { PlayContext, PlayProvider };