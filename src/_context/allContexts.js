import React from "react";
import { PlayProvider } from "./PlayContext";
import { PopupProvider } from "./PopupContext";

const AllContexts = ({ children }) => {
  return (
    <PlayProvider>
      <PopupProvider>
        {children}
      </PopupProvider>
    </PlayProvider>
  )
};

export default AllContexts