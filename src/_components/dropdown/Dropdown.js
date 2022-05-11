import React, { useState } from 'react';

import './Dropdown.css';

import downArrowIcon from './_icons/down-arrow.png';

const Dropdown = ({ id, labelText, onClick, options, borderColor, small = false }) => {
  const [displayLabelText, setDisplayLabelText] = useState(labelText)
  const handleChangeLabel = e => {
    setDisplayLabelText(e.target.textContent);
  };

  const smallStyles = small ? {
    general: { fontSize: '0.75rem' },
    label: { padding: '5px', border: '2px solid' },
    arrow: { height: '8px', width: '12px' },
    option: { fontSize: '0.75rem' },
  } : {};

  const downArrow = <img style={smallStyles.arrow} src={downArrowIcon} alt='' />
  return (
    <div style={smallStyles.general} className="Dropdown">
      <span className='Dropdown-label' style={{borderColor, ...smallStyles.label}}>{displayLabelText} {downArrow}</span>
      <div className='Dropdown-options' style={smallStyles.option} onClick={onClick} id={id ? id : null}>
        {Object.keys(options).map((value, i) => (
          <p key={i} className='Dropdown-option' onClick={handleChangeLabel} id={value}>{options[value]}</p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;