import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToSequence } from '_redux/sequence-maker/sequenceMakerActions';

import './SoundOptions.css';

import Options from '_components/option/Options';
import Icon from '_components/icon/Icon';

import soundInfo from '_media/sequence-maker/soundInfo';
import createBuffer from '_helpers/sequence-maker/createBuffer';

const SoundOptions = () => {
  const { category, sequence } = useSelector(state => state.sequenceMaker);
  const dispatch = useDispatch();

  const handleAddToSequence = e => {
    if (sequence.some(block => !block)) {
      const soundId = e.currentTarget.id;
      dispatch(addToSequence(soundId));
      createBuffer({ category, soundId });
    };
  };

  const sounds = soundInfo[category];

  return (
    <section className='SoundOptions'>
      {!category ? null : (
        <Options width='50%'>
          {Object.keys(sounds).map(sound => (
            <Icon
              key={sound}
              icon={sounds[sound].image}
              size='150px'
              text={sounds[sound].alt}
              id={sound}
              onClick={handleAddToSequence}
            />
          ))}
        </Options>
      )}
    </section>
  );
};

export default SoundOptions;