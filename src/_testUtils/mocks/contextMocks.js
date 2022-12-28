import { useState } from "react";
import ControlBarContext from "_utils/free-paint/ControlBarContext"
import SongMakerInfoContext from "_utils/instrument-id/SongMakerInfoContext";
import MusicDecoderContext from "_utils/music-decoder/MusicDecoderContext";
import PopupContext from "_utils/settings/PopupContext";

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

// Used in PlaySave.test.js and SavedSongs.test.js
export const SongMakerContextMock = ({ children }) => {
  const [loop, setLoop] = useState({ isPlaying: false });
  const stopInstruments = () => {}
  return (
    <SongMakerInfoContext.Provider value={{ loop, setLoop, stopInstruments }}>
      {children}
    </SongMakerInfoContext.Provider>
  );
};

// Used in DecoderControls.test.js and AlphabetTable.test.js
export const MusicDecoderContextMock = ({ children }) => {
  const [playFn, setPlayFn] = useState(null);
  return (
    <MusicDecoderContext.Provider value={{ playFn, setPlayFn }}>
      {children}
    </MusicDecoderContext.Provider>
  );
};