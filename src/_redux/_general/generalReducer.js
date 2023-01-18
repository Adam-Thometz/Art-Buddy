import { changeCurrGame, changeMenu, setCurrTimer } from "./generalActions";
import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  menu: "games",
  currGame: {},
  timer: null,
};

const generalReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(changeMenu, (state, action) => {
      state.menu = action.payload;
    })
    .addCase(changeCurrGame, (state, action) => {
      state.currGame = action.payload;
    })
    .addCase(setCurrTimer, (state, action) => {
      state.currTimer = action.payload;
    });
});

export default generalReducer;
