import {
  setColor,
  setStencil,
  setIsErasing,
  clearGame,
  setEditStencilMode,
  setShownOptions,
  setAvailableColors,
} from "./freePaintActions";
import { createReducer } from "@reduxjs/toolkit";
import paintColors from "_data/free-paint/colors";

export const INITIAL_STATE = {
  shownOptions: null,
  color: "#000000",
  stencil: null,
  isErasing: false,
  isEditingStencil: false,
  availableColors: paintColors,
};

const freePaintReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(setAvailableColors, (state, action) => {
      const colorsToAdd = action.payload;
      const newColors = [...state.availableColors];
      newColors.push(...colorsToAdd);
      state.availableColors = newColors;
    })
    .addCase(setShownOptions, (state, action) => {
      state.shownOptions = action.payload;
    })
    .addCase(setColor, (state, action) => {
      state.color = action.payload;
    })
    .addCase(setStencil, (state, action) => {
      state.stencil = action.payload;
    })
    .addCase(setIsErasing, (state, action) => {
      state.isErasing = action.payload;
    })
    .addCase(setEditStencilMode, (state, action) => {
      state.isEditingStencil = action.payload;
    })
    .addCase(clearGame, (state) => {
      state.color = INITIAL_STATE.color;
      state.stencil = INITIAL_STATE.stencil;
      state.isErasing = INITIAL_STATE.isErasing;
      state.isEditingStencil = INITIAL_STATE.isEditingStencil;
      state.availableColors = INITIAL_STATE.availableColors;
    });
});

export default freePaintReducer;
