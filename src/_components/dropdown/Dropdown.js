import React, { useState } from 'react';

import './Dropdown.css';

import downArrowIcon from './_icons/down-arrow.png';

const Dropdown = ({ id, labelText, onClick, options, borderColor, small = false }) => {
  const [displayLabelText, setDisplayLabelText] = useState(labelText)
  const handleChangeLabel = e => {
    setDisplayLabelText(e.target.textContent);
  };
  const smallStyles = small ? { fontSize: '0.75rem' } : null;
  const smallStylesLabel = small ? { padding: '5px', border: '2px solid' } : null;
  const smallStylesArrow = small ? { height: '8px', width: '12px' } : null

  const downArrow = <img style={smallStylesArrow} src={downArrowIcon} alt='' />
  return (
    <div style={smallStyles} className="Dropdown">
      <span className='Dropdown-label' style={{borderColor, ...smallStylesLabel}}>{displayLabelText} {downArrow}</span>
      <div className='Dropdown-options' onClick={onClick} id={id ? id : null}>
        {Object.keys(options).map((value, i) => (
          <p key={i} className='Dropdown-option' onClick={handleChangeLabel} id={value}>{options[value]}</p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;