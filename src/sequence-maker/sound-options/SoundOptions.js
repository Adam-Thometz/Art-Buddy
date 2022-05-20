import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToSequence } from '../../_redux/actions/sequenceMakerActions';

import './SoundOptions.css';

import Options from '../../_components/option/Options';
import Icon from '../../_components/icon/Icon';

import soundInfo from '../_media/soundInfo';
import { createBuffer } from '../_utils/buffer';

const SoundOptions = () => {
  const category = useSelector(state => state.sequenceMaker.category);
  const sequence = useSelector(state => state.sequenceMaker.sequence);
  const dispatch = useDispatch();

  const handleAddToSequence = e => {
    if (sequence.some(block => !block)) {
      const soundId = e.currentTarget.id;
      dispatch(addToSequence(soundId));
      createBuffer({ category, soundId });
    };
  };

  const sounds = soundInfo[category]

  return (
    <div className='SoundOptions'>
      {!category ? null : (
        <Options width='50%'>
          {Object.keys(sounds).map(sound => (
            <Icon
              icon={sounds[sound].image}
              size='150px'
              text={sounds[sound].alt}
              id={sound}
              onClick={handleAddToSequence}
            />
          ))}
        </Options>
      )}
    </div>
  );
};

export default SoundOptions;