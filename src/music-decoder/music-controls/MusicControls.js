import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { changeScale, changeSound } from "../../_redux/actions";

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
    const newScale = +e.target.id;
    const currInstrument = instrumentIdCollection[currSound]
    dispatch(changeScale({newScale, currInstrument}));
    setCurrScale(newScale);
  };

  const handleChangeSound = e => {
    const newInstrument = instrumentIdCollection[e.target.id];
    dispatch(changeSound({currScale, newInstrument}));
    setCurrSound(e.target.id);
  }

  return (
    <div className="MusicControls">
      <Dropdown
        labelText='SELECT SCALE'
        onClick={handleChangeScale}
        options={scales}
      />
      <Dropdown
        labelText='SELECT SOUND'
        onClick={handleChangeSound}
        options={instruments}
      />
    </div>
  );
};

export default MusicControls;