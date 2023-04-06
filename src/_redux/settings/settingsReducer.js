import { createSlice } from "@reduxjs/toolkit";

export const demoClass = {
  name: "Demo Class",
  students: ["Mario", "Buzz Lightyear", "Spongebob", "Sonic"],
};

export const initialState = {
  volume: 0,
  textToSpeech: false,
  colorBlind: false,
  roster: demoClass,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setVolume(state, action) {
      state.volume = action.payload;
    },
    toggleTextToSpeech(state) {
      state.textToSpeech = !state.textToSpeech;
    },
    toggleColorBlind(state) {
      state.colorBlind = !state.colorBlind;
    },
    setRoster(state, action) {
      state.roster = action.payload;
    }
  }
});

const { setVolume, toggleTextToSpeech, toggleColorBlind, setRoster } = settingsSlice.actions;

export { setVolume, toggleTextToSpeech, toggleColorBlind, setRoster };
export default settingsSlice.reducer;
