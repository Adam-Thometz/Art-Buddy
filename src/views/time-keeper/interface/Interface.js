import "./Interface.css";

import MusicChoices from "./music-choices/MusicChoices";
import PlayPause from "./play-pause/PlayPause";

const Interface = () => {
  return (
    <section className="Interface">
      <section className="Interface-blocks">
        <MusicChoices mood="excited" />
        <MusicChoices mood="relaxed" />
      </section>
      <PlayPause />
    </section>
  );
};

export default Interface;
