import React from "react";

import { useDispatch } from "react-redux";
import Dropdown from "../../_components/dropdown/Dropdown";
import { changeScale } from "../../_redux/actions/actions";

import scales from "../_utils/scales";

const MusicControls = () => {
  const dispatch = useDispatch();

  const handleChangeScale = e => {
    dispatch(changeScale(e.target.value));
  };

  return (
    <div className="MusicControls">
      <Dropdown
        labelText='SELECT SCALE'
        onChange={handleChangeScale}
        options={scales}
        defaultValue={0}
      />
      {/* <label className="MusicControls-label">SELECT SCALE: </label>
      <select defaultValue={0} onChange={handleChangeScale}>
        <option value={0}>C</option>
        <option value={1}>C# / Db</option>
        <option value={2}>D</option>
        <option value={3}>D# / Eb</option>
        <option value={4}>E</option>
        <option value={5}>F</option>
        <option value={6}>F# / Gb</option>
        <option value={7}>G</option>
        <option value={8}>G# / Ab</option>
        <option value={9}>A</option>
        <option value={10}>A# / Bb</option>
        <option value={11}>B</option>
      </select> */}
    </div>
  );
};

export default MusicControls;