import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  menu: "games",
  currGame: {},
  timer: null,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    changeMenu(state, action) {
      state.menu = action.payload;
    },
    changeCurrGame(state, action) {
      state.currGame = action.payload;
    },
    setCurrTimer(state, action) {
      state.currTimer = action.payload;
    },
  },
});

const { changeMenu, changeCurrGame, setCurrTimer } = generalSlice.actions;
export {
  changeMenu,
  changeCurrGame,
  setCurrTimer,
}
export default generalSlice.reducer;

// import { changeCurrGame, changeMenu, setCurrTimer } from "./generalActions";
// import { createReducer } from "@reduxjs/toolkit";

// export const INITIAL_STATE = {
//   menu: "games",
//   currGame: {},
//   timer: null,
// };

// const generalReducer = createReducer(INITIAL_STATE, (builder) => {
//   builder
//     .addCase(changeMenu, (state, action) => {
//       state.menu = action.payload;
//     })
//     .addCase(changeCurrGame, (state, action) => {
//       state.currGame = action.payload;
//     })
//     .addCase(setCurrTimer, (state, action) => {
//       state.currTimer = action.payload;
//     });
// });

// export default generalReducer;