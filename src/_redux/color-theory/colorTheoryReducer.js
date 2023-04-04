import { createSlice } from "@reduxjs/toolkit";
import colorWheel from "_data/color-theory/colorWheel";

export const initialState = { colorWheel };

const colorTheorySlice = createSlice({
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
      state.colorWheel = initialState.colorWheel
    }
  }
})

const { learnColors, toggleAllColors, toggleColor, toggleGroup, toggleText, clearWheel } = colorTheorySlice.actions;
export {
  learnColors,
  toggleAllColors,
  toggleColor,
  toggleGroup,
  toggleText,
  clearWheel
}
export default colorTheorySlice.reducer

// import { clearWheel, learnColors, toggleAllColors, toggleColor, toggleGroup, toggleText } from "./colorTheoryActions";
// import colorWheel from "_data/color-theory/colorWheel";
// import { createReducer } from "@reduxjs/toolkit";

// export const INITIAL_STATE = { colorWheel };

// const colorTheoryReducer = createReducer(INITIAL_STATE, (builder) => {
//   builder
//     .addCase(learnColors, (state, action) => {
//       const category = action.payload;
//       const newColorWheel = { ...state.colorWheel };
//       for (let color in newColorWheel) {
//         if (newColorWheel[color].category === category) {
//           newColorWheel[color].isShowing.color = true;
//           newColorWheel[color].isShowing.text = true;
//         }
//       }
//       state.colorWheel = newColorWheel;
//     })
//     .addCase(toggleAllColors, (state) => {
//       const newColorWheel = { ...state.colorWheel };
//       for (let color in newColorWheel) {
//         newColorWheel[color].isShowing.color = true;
//       }
//       state.colorWheel = newColorWheel;
//     })
//     .addCase(toggleColor, (state, action) => {
//       const color = action.payload;
//       const newColorWheel = { ...state.colorWheel };
//       newColorWheel[color].isShowing.color = true;
//       state.colorWheel = newColorWheel;
//     })
//     .addCase(toggleGroup, (state, action) => {
//       const category = action.payload;
//       const newColorWheel = { ...state.colorWheel };
//       for (let color in newColorWheel) {
//         if (newColorWheel[color].category === category) {
//           newColorWheel[color].isShowing.color = true;
//         }
//       }
//       state.colorWheel = newColorWheel;
//     })
//     .addCase(toggleText, (state, action) => {
//       const color = action.payload;
//       const newColorWheel = { ...state.colorWheel };
//       newColorWheel[color].isShowing.text = true;
//       state.colorWheel = newColorWheel;
//     })
//     .addCase(clearWheel, (state) => {
//       state.colorWheel = INITIAL_STATE.colorWheel;
//     });
// });

// export default colorTheoryReducer;
