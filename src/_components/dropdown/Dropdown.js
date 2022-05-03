import React, { useState } from 'react';

import './Dropdown.css';

import downArrowIcon from './_icons/down-arrow.png';

const Dropdown = ({ labelText, onClick, options, borderColor }) => {
  const [displayLabelText, setDisplayLabelText] = useState(labelText)
  const handleChangeLabel = e => {
    setDisplayLabelText(e.target.textContent)
  };
  const downArrow = <img src={downArrowIcon} alt='' />
  return (
    <div className="Dropdown">
      <span className='Dropdown-label' style={{borderColor}}>{displayLabelText} {downArrow}</span>
      <div className='Dropdown-options' onClick={onClick}>
        {Object.keys(options).map(value => (
          <p className='Dropdown-option' onClick={handleChangeLabel} id={value}>{options[value]}</p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;