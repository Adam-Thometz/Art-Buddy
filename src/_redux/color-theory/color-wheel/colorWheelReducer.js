import { createSlice } from "@reduxjs/toolkit";
import colorWheel from "_data/color-theory/colorWheel";

export const initialState = { colorWheel };

const colorWheelSlice = createSlice({
  name: "colorTheory",
  initialState,
  reducers: {
    learnColors(state, action) {
      const category = action.payload;
      const newColorWheel = { ...state.colorWheel };
      for (let color in newColorWheel) {
        if (newColorWheel[color].category === category) {
          newColorWheel[color].isShowing.color = true;
          newColorWheel[color].isShowing.text = true;
        }
      }
      state.colorWheel = newColorWheel;
    },
    toggleAllColors(state) {
      const newColorWheel = { ...state.colorWheel };
      for (let color in newColorWheel) {
        newColorWheel[color].isShowing.color = true;
      }
      state.colorWheel = newColorWheel;
    },
    toggleColor(state, action) {
      const color = action.payload;
      const newColorWheel = { ...state.colorWheel };
      newColorWheel[color].isShowing.color = true;
      state.colorWheel = newColorWheel;
    },
    toggleGroup(state, action) {
      const category = action.payload;
      const newColorWheel = { ...state.colorWheel };
      for (let color in newColorWheel) {
        if (newColorWheel[color].category === category) {
          newColorWheel[color].isShowing.color = true;
        }
      }
      state.colorWheel = newColorWheel;
    },
    toggleText(state, action) {
      const color = action.payload;
      const newColorWheel = { ...state.colorWheel };
      newColorWheel[color].isShowing.text = true;
      state.colorWheel = newColorWheel;
    },
    clearWheel(state) {
      state.colorWheel = initialState.colorWheel;
    }
  }
})

export const { learnColors, toggleAllColors, toggleColor, toggleGroup, toggleText, clearWheel } = colorWheelSlice.actions;
export default colorWheelSlice.reducer;
