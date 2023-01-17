import React, { createContext, useState } from "react";

const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const [currPopup, setCurrPopup] = useState(null);

  return (
    <PopupContext.Provider value={{ currPopup, setCurrPopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export { PopupContext, PopupProvider };
