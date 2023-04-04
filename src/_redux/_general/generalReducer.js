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
