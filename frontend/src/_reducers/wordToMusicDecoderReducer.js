import { CREATE_WORD, FILL_LETTER, PLAY_MELODY } from "../actionTypes";

import synth from "../music-decoder/utils/synth";
import { now } from 'tone';

const INITIAL_STATE = {
  wordDisplay: [],
  showPlayer: false,
};

export default function wordToMusicDecoderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_WORD:
      const wordDisplay = action.wordInput.toUpperCase().split('').map(letter => ({
        letter,
        note: null
      }));
      const player = wordDisplay.every(char => char.note !== null);
      return { ...state, wordDisplay, showPlayer: player };

    case FILL_LETTER:
      const { letter, note } = action;
      const wordDisplayCopy = [...state.wordDisplay];
      const letterIdx = wordDisplayCopy.findIndex(block => !block.note && (block.letter === letter));
      if (letterIdx === -1) {
        return state;
      }
      wordDisplayCopy[letterIdx].note = note;
      synth.triggerAttackRelease(`${note}4`, '4n');
      const showPlayer = wordDisplayCopy.every(char => char.note !== null);
      return { ...state, wordDisplay: wordDisplayCopy, showPlayer };
      
    case PLAY_MELODY:
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