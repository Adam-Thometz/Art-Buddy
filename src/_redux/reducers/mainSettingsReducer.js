import { changeMenuGames, setRoster, setVolume, toggleColorBlind, toggleTextToSpeech } from "../actions/mainSettingsActions";
import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  menu: 'games',
  volume: 'medium',
  textToSpeech: false,
  colorBlind: false,
  roster: {}
};

const mainSettingsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(changeMenuGames, (state, action) => {
      state.menu = action.payload;
    })
    .addCase(setVolume, (state, action) => {
      state.volume = action.payload;
    })
    .addCase(toggleTextToSpeech, (state) => {
      state.textToSpeech = !state.textToSpeech;
    })
    .addCase(toggleColorBlind, (state) => {
      state.colorBlind = !state.colorBlind;
    })
    .addCase(setRoster, (state, action) => {
      state.roster = action.payload;
    })
});

export default mainSettingsReducer;