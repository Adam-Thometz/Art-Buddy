import { wordToMusicActions } from "../actions/actionTypes";

import { now } from 'tone';
import * as Tone from 'tone';

const {
  CREATE_WORD,
  ADD_WORD,
  FILL_LETTER,
  PLAY_MELODY,
  CHANGE_SCALE
} = wordToMusicActions

const INITIAL_STATE = {
  wordDisplay: [
    []
  ],
  synth: generateSynth(),
};

export default function wordToMusicDecoderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_WORD:
      const newWordDisplay = [...state.wordDisplay];
      const newWord = action.wordInput.toUpperCase().split('').map(letter => ({
        letter,
        note: null
      }));
      newWordDisplay[action.wordId] = newWord.length ?
        newWord :
        [];
      return { ...state, wordDisplay: newWordDisplay };

    case ADD_WORD:
      const addWordInput = [...state.wordDisplay]
      addWordInput.push([])
      return { ...state, wordDisplay: addWordInput };

    case FILL_LETTER:
      const { letter, note } = action;
      const wordDisplayWithFilledLetter = [...state.wordDisplay];
      const letterLocation = searchLetter(wordDisplayWithFilledLetter, letter);
      if (letterLocation.length) {
        const wordIdx = letterLocation[0];
        const letterIdx = letterLocation[1];
        wordDisplayWithFilledLetter[wordIdx][letterIdx].note = note;
        state.synth.triggerAttackRelease(`${note}4`, '4n');
        return { ...state, wordDisplay: wordDisplayWithFilledLetter };
      } else {
        return state;
      }

    case PLAY_MELODY:
      const start = now();
      const currWord = action.word;
      for (let i = 0; i < currWord.length; i++) {
        const { note } = currWord[i];
        const seconds = i * 0.5;
        state.synth.triggerAttackRelease(`${note}4`, "8n", start + seconds);
      }
      return state;
      
    case CHANGE_SCALE:
      const synth = generateSynth(action.scale);
      return { ...state, synth};

    default:
      return state;
  };
};

function searchLetter(wordDisplay, letter) {
  const result = []
  for (let i = 0; i < wordDisplay.length; i++) {
    const currWord = wordDisplay[i];
    const letterIdx = currWord.findIndex(block => !block.note && (block.letter === letter));
    if (letterIdx !== -1) {
      result.push(i, letterIdx);
      break;
    }
  }
  return result;
}

function generateSynth(scale = 0, sample = null) {
  let synth;
  const pitchShift = new Tone.PitchShift({pitch: scale}).toDestination();
  if (sample) {
    synth = new Tone.Sampler({
      urls: {
        C2: sample
      }
    }).connect(pitchShift).toDestination();
  } else {
    synth = new Tone.Synth().connect(pitchShift).toDestination();
  }
  return synth;
}