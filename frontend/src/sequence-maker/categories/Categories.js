import React from "react";

import { useDispatch } from "react-redux";
import { changeCategory } from "../../actions";

const Categories = () => {
  const dispatch = useDispatch();
  
  const handleChange = e => {
    dispatch(changeCategory(e.target.value));
  }
  
  return (
    <div className="Categories">
      <label>Select a sound category:</label>
      <select onChange={handleChange}>
        <option value="" selected>---</option>
        <option value="bodySoundsContinuous">Body Sounds (continuous)</option>
        <option value="bodySoundsOnce">Body Sounds (once)</option>
        <option value="animals">Animals</option>
      </select>
    </div>
  );
};

export default Categories;