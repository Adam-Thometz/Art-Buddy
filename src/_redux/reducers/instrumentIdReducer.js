import { createReducer } from "@reduxjs/toolkit";

import { Sampler } from "tone";

const INITIAL_STATE = {
  mode: null,
  currFamily: null,
  currInstrument: null
}

const instrumentIdReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase()
})

const sample = (instrument) => (
  new Sampler({
    urls: {
      C3: instrument
    }
  }).toDestination()
);

export default instrumentIdReducer