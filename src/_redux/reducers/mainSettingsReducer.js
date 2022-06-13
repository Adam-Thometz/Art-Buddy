import { changeMenuGames } from "../actions/mainSettingsActions";
import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  menu: 'games'
};

const mainSettingsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(changeMenuGames, (state, action) => {
      state.menu = action.payload;
    })
});

export default mainSettingsReducer;