import "./Settings.css";

import Volume from "./volume/Volume";
import TextToSpeech from "./text-to-speech/TextToSpeech";
import ColorBlind from "./color-blind/ColorBlind";
import Rosters from "./rosters/Rosters";

const Settings = () => {
  return (
    <main className="Settings">
      <p className="Settings-text">Volume</p>
      <Volume />

      <p className="Settings-text">Text-to-Speech</p>
      <TextToSpeech />

      <p className="Settings-text">Color Blind Mode</p>
      <ColorBlind />

      <p className="Settings-text">Roster</p>
      <Rosters />
    </main>
  );
};

export default Settings;
