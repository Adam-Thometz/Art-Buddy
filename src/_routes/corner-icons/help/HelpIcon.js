import React from 'react';

import './HelpIcon.css';

import help from '../_icons/help.png';

const HelpIcon = () => {
  return (
    <img className='HelpIcon' src={help} alt='Help' />
  );
};

export default HelpIcon;