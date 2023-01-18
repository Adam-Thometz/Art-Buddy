import {
  setRoster,
  setVolume,
  toggleColorBlind,
  toggleTextToSpeech,
} from "./settingsActions";
import { createReducer } from "@reduxjs/toolkit";

export const demoClass = {
  name: "Demo Class",
  students: ["Mario", "Buzz Lightyear", "Spongebob", "Sonic"],
};

export const INITIAL_STATE = {
  menu: "games",
  currGame: {},
  timer: null,
  volume: 0,
  textToSpeech: false,
  colorBlind: false,
  roster: demoClass,
};

const mainSettingsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
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
    });
});

export default mainSettingsReducer;
