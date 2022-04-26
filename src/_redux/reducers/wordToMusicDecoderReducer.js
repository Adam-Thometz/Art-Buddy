import { wordToMusicActions } from "../actions/actionTypes";

import { now } from 'tone';
import * as Tone from 'tone';

const {
  CREATE_WORD,
  ADD_WORD,
  FILL_LETTER,
  PLAY_NOTE,
  PLAY_MELODY,
  CHANGE_SCALE,
  CHANGE_SOUND
} = wordToMusicActions

export const INITIAL_STATE = {
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
      if (!letterLocation.length) {
        return state;
      }
      const wordIdx = letterLocation[0];
      const letterIdx = letterLocation[1];
      wordDisplayWithFilledLetter[wordIdx][letterIdx].note = note;
      state.synth.triggerAttackRelease(`${note}3`, '4n');
      return { ...state, wordDisplay: wordDisplayWithFilledLetter };

    case PLAY_NOTE:
      state.synth.triggerAttackRelease(`${action.note}3`, "4n")
      return state;

    case PLAY_MELODY:
      const start = now();
      const currWord = action.word;
      for (let i = 0; i < currWord.length; i++) {
        const { note } = currWord[i];
        const seconds = i * 0.5;
        state.synth.triggerAttackRelease(`${note}3`, "8n", start + seconds);
      }
      return state;

    case CHANGE_SCALE:
      const soundWithNewScale = generateSynth(action.scale, action.sound);
      return { ...state, synth: soundWithNewScale};

    case CHANGE_SOUND:
      const newSound = generateSynth(action.scale, action.sound)
      return { ...state, synth: newSound }

    default:
      return state;
  };
};

export function searchLetter(wordDisplay, letter) {
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

export function generateSynth(pitch = 0, sample = null) {
  let synth;
  const pitchShift = new Tone.PitchShift({pitch}).toDestination();
  if (sample) {
    synth = new Tone.Sampler({
      urls: {
        C4: sample
      }
    }).connect(pitchShift);
  } else {
    synth = new Tone.Synth().connect(pitchShift);
  }
  return synth;
}