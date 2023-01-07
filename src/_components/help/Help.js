import React, { useContext } from 'react';
import { PopupContext } from '_context/PopupContext';

import { useSelector } from 'react-redux';

import './Help.css';

import help from './help.png';

const Help = () => {
  const { currGame } = useSelector(state => state.general);
  const { setCurrPopup } = useContext(PopupContext);

  const openHelp = () => setCurrPopup({
    title: currGame.name,
    popup: <p>{currGame.description}</p>
  });
  return <img className='Help' src={help} alt='Help' onClick={openHelp} />;
};

export default Help;