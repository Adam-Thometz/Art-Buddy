import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToSequence } from '_redux/sequence-maker/sequenceMakerActions';

import './SoundOptions.css';

import Options from '_components/option/Options';
import Icon from '_components/icon/Icon';

import soundInfo from '_data/sequence-maker/soundInfo';
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

  const optionDisplay = !sounds ? null : Object.keys(sounds).map(sound => {
    const { alt, image } = sounds[sound];
    return <Icon key={sound} icon={image} size='150px' text={alt} id={sound} onClick={handleAddToSequence} />;
  });

  return (
    <section className='SoundOptions'>
      <Options width='50%'>
        {optionDisplay}
      </Options>
    </section>
  );
};

export default SoundOptions;