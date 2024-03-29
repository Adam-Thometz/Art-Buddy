import { useContext } from "react";
import { PlayContext } from "context/PlayContext";

import { useDispatch, useSelector } from "react-redux";
import { addToRhythm, toggleAnimation, toggleLilyPadDisplay } from "store/jump-into-rhythm/jumpIntoRhythmReducer";

import "./NoteOptions.css";

import Button from "components/button/Button";
import Icon from "components/icon/Icon";

import noteInfo from "data/jump-into-rhythm/noteInfo";
import { start, Transport, Time } from "tone";

const NoteOptions = () => {
  const { rhythm, isDisplayingLilyPads } = useSelector((state) => state.jumpIntoRhythm);
  const { volume } = useSelector((state) => state.settings);
  const { playFn } = useContext(PlayContext);
  const dispatch = useDispatch();

  const handleAddNotes = (e) => {
    const { id } = e.currentTarget;
    const { img, duration, isRest } = noteInfo[id];
    dispatch(addToRhythm({ id, img, duration, isRest }));
  };

  const notes = Object.keys(noteInfo).map((noteId) => {
    const { text, img } = noteInfo[noteId];
    const width = text === "Eighth Notes" ? "50%" : "25%";
    return (
      <Icon
        key={noteId}
        icon={img}
        text={text}
        size="100px"
        width={width}
        id={noteId}
        onClick={handleAddNotes}
        testId="notes"
      />
    );
  });

  const handleHop = async () => {
    if (Transport.state === "stopped") await start();
    dispatch(toggleAnimation());
    dispatch(toggleLilyPadDisplay());
    playFn({ rhythm, volume });

    const duration = Time(`${rhythm.length / 4}:1`).toSeconds() * 1000;
    setTimeout(() => Transport.stop(), duration);
  };

  const back = () => {
    dispatch(toggleLilyPadDisplay());
    dispatch(toggleAnimation());
    Transport.stop();
  };

  return (
    <section className="NoteOptions">
      <section className="NoteOptions-notes">{notes}</section>
      {isDisplayingLilyPads ? (
        <Button onClick={back}>BACK</Button>
      ) : (
        <Button
          colorId={0}
          disabled={rhythm.includes(null)}
          onClick={handleHop}
        >
          PLAY
        </Button>
      )}
    </section>
  );
};

export default NoteOptions;
