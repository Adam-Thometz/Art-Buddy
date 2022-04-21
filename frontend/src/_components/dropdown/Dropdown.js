import React from 'react';

import './Dropdown.css';

const Dropdown = ({ labelText, onChange, options, defaultValue }) => {
  return (
    <div className="Dropdown">
      <label className="Dropdown-label">{labelText}: </label>
      <select defaultValue={defaultValue} onChange={onChange}>
        {Object.keys(options).map(value => (
          <option value={value}>{options[value]}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;