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
      state.timer = action.payload;
    },
  },
});

export const {
  changeMenu,
  changeCurrGame,
  setCurrTimer,
}  = generalSlice.actions;
export default generalSlice.reducer;
