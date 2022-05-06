import { createSound, playSound } from "../actions/insturmentIdActions";
import { createReducer } from "@reduxjs/toolkit";
import * as storedSounds from '../../instrument-id/_sounds/soundImports';

import sample from "../../_utils/sample";

const INITIAL_STATE = {
  currInstrument: null
}

const instrumentIdReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(createSound, (state, action) => {
      const instrument = action.payload;
      const sound = storedSounds[instrument];
    })
    .addCase(playSound, (state, action) => {
      debugger;
      const sound = action.payload;
      const audio = new Audio(sound);
      audio.play();
    })
});

export default instrumentIdReducer