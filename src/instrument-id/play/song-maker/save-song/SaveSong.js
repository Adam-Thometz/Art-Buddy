import React from 'react';

import './SaveSong.css';

import Button from '../../../../_components/button/Button';
import Input from '../../../../_components/input/Input';

const SaveSong = () => {
  return (
    <div className='SaveSong'>
      <Input id='title' label='Song Title' />
      <Button colorId={0}>SAVE</Button>
    </div>
  );
};

export default SaveSong;