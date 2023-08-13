import React from "react";
import { PlayProvider } from "./PlayContext";
import { PopupProvider } from "./PopupContext";
import { MicProvider } from "./MicContext";

const GlobalContext = ({ children }) => {
  return (
    <PlayProvider>
      <MicProvider>
        <PopupProvider>
          {children}
        </PopupProvider>
      </MicProvider>
    </PlayProvider>
  );
};

export default GlobalContext;