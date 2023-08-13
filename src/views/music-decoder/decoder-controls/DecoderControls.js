import { useContext } from "react";
import { PlayContext } from "context/PlayContext";

import { useDispatch, useSelector } from "react-redux";
import { changeScale, changeSound, toggleUpperCase, toggleNote } from "store/music-decoder/musicDecoderReducer";

import "./DecoderControls.css";

import Dropdown from "components/dropdown/Dropdown";
import Button from "components/button/Button";
import Toggle from "components/toggle/Toggle";

import scales from "./dropdown-options/scales";
import instruments from "./dropdown-options/instruments";
import getSound from "lib/music-decoder/getSound";
import convertLettersToNotes from "lib/music-decoder/convertLettersToNotes";

const DecoderControls = () => {
  const { playFn, setPlayFn } = useContext(PlayContext);
  const { words, scale, sound, currPlaying, filledLetters, isUpperCase } =
    useSelector((state) => state.musicDecoder);
  const { volume } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleChangeScale = (e) => {
    const newScale = +e.target.id;
    setPlayFn(
      () => getSound({ volume, scale: newScale, sampleId: sound }).playSound
    );
    dispatch(changeScale(newScale));
  };

  const handleChangeSound = (e) => {
    const sampleId = e.target.id;
    setPlayFn(() => getSound({ volume, scale, sampleId }).playSound);
    dispatch(changeSound(sampleId));
  };

  const handleToggle = () => dispatch(toggleUpperCase());

  const handlePlayMelody = () => {
    if (currPlaying) return;

    const { notesToPlay, lettersToToggle } = convertLettersToNotes(
      words,
      filledLetters
    );

    for (let i = 0; i < lettersToToggle.length; i++) {
      const letter = lettersToToggle[i];
      if (!letter) continue;
      const start = setTimeout(() => {
        dispatch(toggleNote(letter));
        clearTimeout(start);
      }, 500 * i);
    }

    const end = setTimeout(() => {
      dispatch(toggleNote(null));
      clearTimeout(end);
    }, 500 * lettersToToggle.length);

    playFn(notesToPlay);
  };

  return (
    <section className="DecoderControls">
      <aside className="DecoderControls-dropdowns">
        <Dropdown
          labelText="SCALE"
          onClick={handleChangeScale}
          options={scales}
        />
        <Dropdown
          labelText="SOUND"
          onClick={handleChangeSound}
          options={instruments}
        />
      </aside>
      <aside className="DecoderControls-play">
        <Toggle
          label="UPPER CASE"
          currToggle={isUpperCase}
          toggleFn={handleToggle}
        />
        <Button
          small
          colorId={0}
          onClick={handlePlayMelody}
          otherStyles={{ width: "10vw", padding: "3%" }}
        >
          PLAY
        </Button>
      </aside>
    </section>
  );
};

export default DecoderControls;
