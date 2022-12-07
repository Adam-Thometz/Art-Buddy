import React from 'react';

import { useSelector } from 'react-redux';

import './Help.css';

import Popup from '_components/popup/Popup';

import help from './help.png';

const Help = () => {
  const { currGame } = useSelector(state => state.mainSettings);
  return (
    <Popup
      trigger={<img className='Help' src={help} alt='Help' />}
      triggerClass="Help"
      title={currGame.name}
      popup={<>
        <p>{currGame.description}</p>
      </>}
    />
  );
};

export default Help;