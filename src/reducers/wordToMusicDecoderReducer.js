import { CREATE_WORD, FILL_LETTER } from "../actionTypes";

import synth from "../music-colors/utils/synth";

const INITIAL_STATE = {
  wordDisplay: [],
  showPlayer: false,
};

export default function wordToMusicDecoder(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_WORD:
      const wordDisplay = action.wordInput.toUpperCase().split('').map(letter => {
        return {
          letter,
          note: null,
        };
      });
      const player = wordDisplay.every(char => char.note !== null);
      return { ...state, wordDisplay, showPlayer: player };

    case FILL_LETTER:
      const { letter, note } = action;
      const wordDisplayCopy = [...state.wordDisplay];
      const letterIdx = wordDisplayCopy.findIndex(block => !block.note && (block.letter === letter));
      if (letterIdx === -1) {
        return state;
      }
      wordDisplayCopy[letterIdx] = {letter, note};
      synth.triggerAttackRelease(`${note}4`, '4n');
      const showPlayer = wordDisplayCopy.every(char => char.note !== null);
      return { ...state, wordDisplay: wordDisplayCopy, showPlayer };
      
    default:
      return state;
  };
};