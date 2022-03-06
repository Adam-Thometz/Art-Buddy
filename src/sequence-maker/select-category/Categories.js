import React from "react";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../actions";

const Categories = () => {
  const dispatch = useDispatch();
  
  const handleChange = e => {
    dispatch(changeCategory(e.target.value))
  }
  
  return (
    <div className="Options">
      <label>Select a sound category:</label>
      <select onChange={handleChange}>
        <option value="" selected>---</option>
        <option value="soundsContinuous">Level 1: Clapping and Stomping (continuous)</option>
        <option value="soundsOnce">Level 2: Clapping and Stomping (once)</option>
        <option value="rhythms">Level 3: Rhythms</option>
        <option value="pitches">Level 4: Musical Pitches</option>
      </select>
    </div>
  );
};

export default Categories;