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
      const wordInputArr = action.wordInput.toUpperCase().split(' ');
      const wordDisplay = wordInputArr.map(word => {
        return word.split('').map(letter => {
          return {
            letter,
            note: null
          };
        });
      });
      const player = wordDisplay.every(word => {
        return word.every(char => char.note !== null);
      });
      return { ...state, wordDisplay, showPlayer: player };

    case FILL_LETTER:
      const { letter, note } = action;
      const wordDisplayCopy = [...state.wordDisplay];
      for (let wordIdx = 0; wordIdx < wordDisplayCopy.length; wordIdx++) {
        const letterIdx = wordDisplayCopy[wordIdx].findIndex(block => !block.note && block.letter === letter);
        if (letterIdx !== -1) {
          wordDisplayCopy[wordIdx][letterIdx] = {letter, note};
          synth.triggerAttackRelease(`${note}4`, '4n');
          break;
        }
      }
      const showPlayer = wordDisplayCopy.every(word => (
        word.every(char => char.note !== null)
      ));
      return { ...state, wordDisplay: wordDisplayCopy, showPlayer };
      
    case PLAY_MELODY:
      // TODO: Function is buggy. Figure out what's going on
      const start = now();
      const currWord = action.word;
      for (let i = 0; i < currWord.length; i++) {
        const { note } = currWord[i];
        const seconds = i * 0.5;
        synth.triggerAttackRelease(`${note}4`, "8n", (i === currWord.length-1 ? start + seconds + 0.5 : start + seconds));
      }
    default:
      return state;
  };
};