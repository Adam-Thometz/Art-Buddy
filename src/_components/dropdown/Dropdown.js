import React, { useState } from 'react';

import './Dropdown.css';

import downArrowIcon from './down-arrow.png';

const Dropdown = ({ id = null, labelText, onClick, options, borderColor }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [displayLabelText, setDisplayLabelText] = useState(labelText);

  const handleShowOptions = () => setShowOptions(show => !show);
  
  const handleChangeLabel = e => {
    setDisplayLabelText(e.target.textContent);
    setShowOptions(show => !show);
  };

  const optionsMenu = (
    <div className='Dropdown-options' onClick={onClick} id={id !== null ? id : null}>
      {Object.keys(options).map((value) => (
        <p key={value} className='Dropdown-option' onClick={handleChangeLabel} id={value}>{options[value]}</p>
      ))}
    </div>
  );

  const downArrow = <img src={downArrowIcon} alt='' />;
  
  return (
    <div className="Dropdown">
      <span className='Dropdown-label' onClick={handleShowOptions} style={borderColor}>{displayLabelText} {downArrow}</span>
      {showOptions ? optionsMenu : null}
    </div>
  );
};

export default Dropdown;