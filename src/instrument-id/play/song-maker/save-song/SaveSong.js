import React from 'react';

import { useSelector } from 'react-redux';

import './SaveSong.css';

import Button from '../../../../_components/button/Button';
import Input from '../../../../_components/input/Input';

const SaveSong = () => {
  const instruments = useSelector(state => state.instrumentId.instruments);

  const handleSave = e => {
    const title = e.target.previousSibling.children[1].value;
    const savedSong = { title, instruments };
    // TODO: Finish save song feature
  };

  return (
    <div className='SaveSong'>
      <Input id='title' label='Song Title' />
      <Button colorId={0} onClick={handleSave}>SAVE</Button>
    </div>
  );
};

export default SaveSong;