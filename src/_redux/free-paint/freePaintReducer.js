import { setColor, setDisplay } from "./freePaintActions";
import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  color: "#FFFFFF",
  display: null
};

const freePaintReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(setColor, (state, action) => {
      state.color = action.payload;
    })
    .addCase(setDisplay, (state, action) => {
      state.display = action.payload;
    })
});

export default freePaintReducer;