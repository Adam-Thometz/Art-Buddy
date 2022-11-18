import { changeCurrGame, changeMenu, setRoster, setVolume, toggleColorBlind, toggleTextToSpeech } from "./mainSettingsActions";
import { createReducer } from "@reduxjs/toolkit";

export const demoClass = {
  name: 'Mr. Thometz',
  students: [
    'Mario',
    'Buzz Lightyear',
    'Spongebob',
    'Sonic'
  ]
};

export const INITIAL_STATE = {
  menu: 'games',
  currGame: {},
  volume: 0,
  textToSpeech: false,
  colorBlind: false,
  roster: demoClass
};

const mainSettingsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(changeMenu, (state, action) => {
      state.menu = action.payload;
    })
    .addCase(changeCurrGame, (state, action) => {
      state.currGame = action.payload;
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
    });
});

export default mainSettingsReducer;