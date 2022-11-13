import { setColor, setDisplay, setIsErasing, clearGame } from "./freePaintActions";
import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  color: "#000000",
  display: null,
  isErasing: false,
};

const freePaintReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(setColor, (state, action) => {
      state.color = action.payload;
    })
    .addCase(setDisplay, (state, action) => {
      state.display = action.payload;
    })
    .addCase(setIsErasing, (state, action) => {
      state.isErasing = action.payload;
    })
    .addCase(clearGame, (state) => {
      state.color = INITIAL_STATE.color; 
      state.display = INITIAL_STATE.display; 
      state.isErasing = INITIAL_STATE.isErasing;
    });
});

export default freePaintReducer;