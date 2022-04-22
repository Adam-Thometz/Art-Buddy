import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { changeScale, changeSound } from "../../_redux/actions/actions";

import './MusicControls.css'

import Dropdown from "../../_components/dropdown/Dropdown";

import scales from "../_utils/dropdown-options/scales";
import instruments from "../_utils/dropdown-options/instruments";
import * as instrumentIdCollection from '../../instrument-id/_sounds/soundImports'

const MusicControls = () => {
  const [currSound, setCurrSound] = useState('synth');
  const [currScale, setCurrScale] = useState(0);
  const dispatch = useDispatch();

  const handleChangeScale = e => {
    const newScale = e.target.value;
    dispatch(changeScale(newScale, instrumentIdCollection[currSound]));
    setCurrScale(newScale);
  };

  const handleChangeSound = e => {
    const newSound = e.target.value;
    dispatch(changeSound(currScale, instrumentIdCollection[newSound]));
    setCurrSound(newSound);
  }

  return (
    <div className="MusicControls">
      <Dropdown
        labelText='SELECT SCALE'
        onChange={handleChangeScale}
        options={scales}
        defaultValue={0}
      />
      <Dropdown
        labelText='SELECT SOUND'
        onChange={handleChangeSound}
        options={instruments}
        defaultValue='synth'
      />
    </div>
  );
};

export default MusicControls;