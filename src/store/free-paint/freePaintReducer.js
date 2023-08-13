import { createSlice } from "@reduxjs/toolkit";
import paintColors from "data/free-paint/colors";

export const initialState = {
  shownOptions: null,
  color: "#000000",
  stencil: null,
  isErasing: false,
  isEditingStencil: false,
  availableColors: paintColors,
}

const freePaintSlice = createSlice({
  name: "freePaint",
  initialState,
  reducers: {
    setAvailableColors(state, action) {
      const colorsToAdd = action.payload;
      const newColors = [...state.availableColors];
      newColors.push(...colorsToAdd);
      state.availableColors = newColors;
    },
    setShownOptions(state, action) {
      state.shownOptions = action.payload;
    },
    setColor(state, action) {
      state.color = action.payload;
    },
    setStencil(state, action) {
      state.stencil = action.payload;
    },
    setIsErasing(state, action) {
      state.isErasing = action.payload;
    },
    setEditStencilMode(state, action) {
      state.isEditingStencil = action.payload;
    },
    clearGame(state) {
      state.color = initialState.color;
      state.stencil = initialState.stencil;
      state.isErasing = initialState.isErasing;
      state.isEditingStencil = initialState.isEditingStencil;
      state.availableColors = initialState.availableColors;
    }
  }
})

export const { setAvailableColors, setShownOptions, setColor, setStencil, setIsErasing, setEditStencilMode, clearGame } = freePaintSlice.actions

export default freePaintSlice.reducer;
