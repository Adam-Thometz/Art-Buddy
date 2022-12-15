import { clearWheel, learnColors } from "./colorTheoryActions";
import colorWheel from "_data/color-theory/colorWheel";
import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = { colorWheel };

const colorTheoryReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(learnColors, (state, action) => {
      const newColorWheel = { ...state.colorWheel };
      for (let color in newColorWheel) {
        if (newColorWheel[color].category === action.payload) {
          newColorWheel[color].isShowing.color = true;
          newColorWheel[color].isShowing.name = true;
        }
      }
      state.colorWheel = newColorWheel;
    })
    .addCase(clearWheel, (state) => {
      state.colorWheel = INITIAL_STATE.colorWheel;
    })
});

export default colorTheoryReducer;