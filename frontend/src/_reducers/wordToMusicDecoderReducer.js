import { wordToMusicActions } from "../_actions/actionTypes";

import synth from "../music-decoder/utils/synth";
import { now } from 'tone';

const INITIAL_STATE = {
  wordDisplay: [
    []
  ],
  showPlayer: false,
};

export default function wordToMusicDecoderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case wordToMusicActions.CREATE_WORD:
      const newWordDisplay = [...state.wordDisplay];
      const newWord = action.wordInput.toUpperCase().split('').map(letter => ({
        letter,
        note: null
      }));
      newWordDisplay[action.wordId] = newWord.length ?
        newWord :
        [];
      return { 
        ...state,
        wordDisplay: newWordDisplay,
      };
    case wordToMusicActions.ADD_WORD:
      const addWordInput = [...state.wordDisplay]
      addWordInput.push([])
      return { ...state, wordDisplay: addWordInput };
    case wordToMusicActions.FILL_LETTER:
      const { letter, note } = action;
      const wordDisplayCopy = [...state.wordDisplay];
      const letterLocation = searchLetter(wordDisplayCopy, letter);
      if (letterLocation.length) {
        const wordIdx = letterLocation[0];
        const letterIdx = letterLocation[1];
        wordDisplayCopy[wordIdx][letterIdx].note = note;
        synth.triggerAttackRelease(`${note}4`, '4n');
        return {
          ...state,
          wordDisplay: wordDisplayCopy,
        };
      } else {
        return state;
      }
    case wordToMusicActions.PLAY_MELODY:
      const start = now();
      const currWord = action.word;
      for (let i = 0; i < currWord.length; i++) {
        const { note } = currWord[i];
        const seconds = i * 0.5;
        synth.triggerAttackRelease(`${note}4`, "8n", start + seconds);
      }
      return state;
    default:
      return state;
  };
};

function searchLetter(wordDisplay, letter) {
  const result = []
  for (let i = 0; i < wordDisplay.length; i++) {
    const letterIdx = wordDisplay[i].findIndex(block => !block.note && (block.letter === letter));
    if (letterIdx !== -1) {
      result.push(i, letterIdx);
      break;
    }
  }
  return result;
}