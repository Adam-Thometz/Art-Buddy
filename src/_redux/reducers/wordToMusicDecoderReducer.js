import { addWord, changeScale, createWord, fillLetter, playMelody, playNote, clearGame } from "../actions/wordToMusicActions";
import { createReducer } from "@reduxjs/toolkit";

import { now } from 'tone';
import generateSynth from "../../music-decoder/_utils/synth";
import play from "../../music-decoder/_utils/synth";

export const INITIAL_STATE = {
  wordDisplay: [
    {
      scale: 0,
      word: []
    }
  ],
};

const wordToMusicDecoderReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(addWord, (state) => {
      state.wordDisplay.push({ scale: 0, word: [] })
    })
    .addCase(createWord, (state, action) => {
      const { input, id } = action.payload;
      const newWord = input.toUpperCase().split('').map(letter => ({
        letter,
        note: null
      }));
      state.wordDisplay[id].word = newWord.length ?
        newWord :
        [];
    })
    .addCase(fillLetter, (state, action) => {
      const { letter, note } = action.payload;
      const letterLocation = searchLetter(state.wordDisplay, letter);
      if (!letterLocation.length) return;

      const wordIdx = letterLocation[0];
      const letterIdx = letterLocation[1];
      state.wordDisplay[wordIdx].word[letterIdx].note = note;
      if (process.env.NODE_ENV !== 'test') {
        play(note);
      };
    })
    .addCase(playNote, (state, action) => {
      const { note, id } = action.payload;
      const scale = state.wordDisplay[id].scale;
      if (process.env.NODE_ENV !== 'test') play(note, scale);
    })
    .addCase(playMelody, (state, action) => {
      const word = action.payload.word.map(char => char.note)
      const scale = action.payload.scale;
      if (process.env.NODE_ENV !== 'test') play(word, scale);
    })
    .addCase(changeScale, (state, action) => {
      const { scaleId, wordId } = action.payload;
      state.wordDisplay[wordId].scale = scaleId;
    })
    .addCase(clearGame, (state) => {
      state.wordDisplay = [
        {
          scale: 0,
          word: []
        }
      ]
    });
})

export function searchLetter(wordDisplay, letter) {
  const result = []
  for (let i = 0; i < wordDisplay.length; i++) {
    const currWord = wordDisplay[i].word;
    const letterIdx = currWord.findIndex(block => !block.note && (block.letter === letter));
    if (letterIdx !== -1) {
      result.push(i, letterIdx);
      break;
    }
  }
  return result;
}

export default wordToMusicDecoderReducer;