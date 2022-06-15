import React from 'react';

import { useDispatch } from 'react-redux';
import { setCategory, setDuration, setPitch } from "../../_redux/actions/sequenceMakerActions";

import './SequenceControls.css'

import Dropdown from '../../_components/dropdown/Dropdown';

import categories from "./dropdown-options/categories";
import pitches from './dropdown-options/pitches';
import durations from './dropdown-options/durations';

const SequenceControls = () => {
  const dispatch = useDispatch();

  const handleSetCategory = e => {
    const category = e.target.id;
    dispatch(setCategory(category));
  };

  const handleSetPitch = e => {
    const pitch = e.target.id;
    dispatch(setPitch(pitch));
  };

  const handleSetDuration = e => {
    const duration = +e.target.id;
    dispatch(setDuration(duration));
  };

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