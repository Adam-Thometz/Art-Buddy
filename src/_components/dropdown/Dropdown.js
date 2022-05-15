import React, { useState } from 'react';

import './Dropdown.css';

import downArrowIcon from './_icons/down-arrow.png';

const Dropdown = ({ id = null, labelText, onClick, options, borderColor, small = false }) => {
  const [displayLabelText, setDisplayLabelText] = useState(labelText)
  const handleChangeLabel = e => {
    setDisplayLabelText(e.target.textContent);
  };

  const styles = small ? {
    general: { fontSize: '0.75rem' },
    label: { padding: '5px', border: '2px solid' },
    arrow: { height: '8px', width: '12px' },
    options: { fontSize: '0.75rem' },
  } : {
    general: {  fontSize: '1.5rem' },
    label: { padding: '10px', border: '5px solid' },
    arrow: { height: '16px', width: '24px' },
    options: { fontSize: '1rem' }
  };

  const downArrow = <img style={styles.arrow} src={downArrowIcon} alt='' />
  return (
    <div style={styles.general} className="Dropdown">
      <span className='Dropdown-label' style={{borderColor, ...styles.label}}>{displayLabelText} {downArrow}</span>
      <div className='Dropdown-options' style={styles.options} onClick={onClick} id={id !== null ? id : null}>
        {Object.keys(options).map((value, i) => (
          <p key={i} className='Dropdown-option' onClick={handleChangeLabel} id={value}>{options[value]}</p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;