import { useState } from "react";
import ControlBarContext from "_utils/free-paint/ControlBarContext"
import { PlayContext } from "_utils/_general/PlayContext";
import PopupContext from "_utils/_general/PopupContext";

// Used in ButtonWrapper.test.js
export const ControlBarContextMock = ({ children }) => {
  const [shownOptions, handleShownOptions] = useState(null);
  return (
    <ControlBarContext.Provider value={{ shownOptions, handleShownOptions }}>
      {children}
    </ControlBarContext.Provider>
  );
};

// Used in Settings.test.js, Rosters.test.js
export const PopupContextMock = ({ children }) => {
  const [, setCurrPopup] = useState({ title: "Hello", popup: <h1>How are you</h1> });
  return (
    <PopupContext.Provider value={{ setCurrPopup }}>
      {children}
    </PopupContext.Provider>
  );
};

// Used in DecoderControls.test.js and AlphabetTable.test.js
export const PlayContextMock = ({ children }) => {
  const [playFn, setPlayFn] = useState({ playLoop: jest.fn(), stopLoop: jest.fn() });
  return (
    <PlayContext.Provider value={{ playFn, setPlayFn }}>
      {children}
    </PlayContext.Provider>
  );
};