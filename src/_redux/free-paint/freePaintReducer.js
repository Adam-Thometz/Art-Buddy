import {
  setColor,
  setStencil,
  setIsErasing,
  clearGame,
  setEditStencilMode,
  setShownOptions,
} from "./freePaintActions";
import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  shownOptions: null,
  color: "#000000",
  stencil: null,
  isErasing: false,
  isEditingStencil: false,
};

const freePaintReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
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
    });
});

export default freePaintReducer;
