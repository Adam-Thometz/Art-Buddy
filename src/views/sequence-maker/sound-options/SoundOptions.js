import { useContext } from "react";
import { PlayContext } from "context/PlayContext";

import { useDispatch, useSelector } from "react-redux";
import { addToSequence } from "store/sequence-maker/sequenceMakerReducer";

import "./SoundOptions.css";

import Options from "components/option/Options";
import Icon from "components/icon/Icon";

import soundInfo from "data/sequence-maker/soundInfo";
import createSounds from "utils/sequence-maker/createSounds";

const SoundOptions = () => {
  const { category, sequence } = useSelector((state) => state.sequenceMaker);
  const { volume } = useSelector((state) => state.settings);
  const { setPlayFn } = useContext(PlayContext);
  const dispatch = useDispatch();

  const handleAddToSequence = (e) => {
    if (sequence.some((block) => !block)) {
      const soundId = e.currentTarget.id;
      dispatch(addToSequence(soundId));
      setPlayFn(() => createSounds(sequence, volume));
    }
  };

  const sounds = soundInfo[category];

  const optionDisplay = sounds
    ? Object.keys(sounds).map((sound) => (
        <Icon
          key={sound}
          icon={sounds[sound].image}
          size="150px"
          text={sounds[sound].alt}
          id={sound}
          onClick={handleAddToSequence}
        />
      ))
    : null;

  return (
    <section className="SoundOptions">
      <Options width="50%">{optionDisplay}</Options>
    </section>
  );
};

export default SoundOptions;
