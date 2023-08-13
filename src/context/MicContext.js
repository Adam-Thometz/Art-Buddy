import React, { createContext, useState } from "react";

const MicContext = createContext();

const MicProvider = ({ children }) => {
  const [mic, setMic] = useState(null);

  return (
    <MicContext.Provider value={{ mic, setMic }}>
      {children}
    </MicContext.Provider>
  );
};

export { MicContext, MicProvider };
