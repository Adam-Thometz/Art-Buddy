import React from 'react';

import { useDispatch } from 'react-redux';
import { setCategory, setDuration, setPitch } from "_redux/actions/sequenceMakerActions";

import './SequenceControls.css'

import Dropdown from '_components/dropdown/Dropdown';

import categories from "./dropdown-options/categories";
import pitches from './dropdown-options/pitches';
import durations from './dropdown-options/durations';

const SequenceControls = () => {
  const dispatch = useDispatch();

  const handleSetCategory = e => dispatch(setCategory(e.target.id));
  const handleSetPitch = e => dispatch(setPitch(e.target.id));
  const handleSetDuration = e => dispatch(setDuration(+e.target.id));

  return (
    <section className='SequenceControls'>
      <Dropdown
        labelText="SOUND CATEGORY"
        onClick={handleSetCategory}
        options={categories}
      />
      <Dropdown
        labelText="PITCH"
        onClick={handleSetPitch}
        options={pitches}
      />
      <Dropdown
        labelText="DURATION"
        onClick={handleSetDuration}
        options={durations}
      />
    </section>
  );
};

export default SequenceControls;