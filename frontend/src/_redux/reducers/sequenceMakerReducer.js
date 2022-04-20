import { sequenceMakerActions } from "../actions/actionTypes";

import soundInfo from "../../sequence-maker/_media/soundInfo";
import pitches from "../../sequence-maker/_utils/pitchMap";
import { now } from "tone";

const INITIAL_STATE = {
  category: '',
  sequence: [null, null, null, null],
};

const {
  CHANGE_CATEGORY,
  ADD_TO_SEQUENCE,
  REMOVE_FROM_SEQUENCE,
  PLAY_SEQUENCE,
  RESET_SEQUENCE,
  SET_PITCH
} = sequenceMakerActions;

export default function sequenceMaker(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return { 
        ...state, 
        category: action.category
      };

    case ADD_TO_SEQUENCE:
      const currIdx = state.sequence.indexOf(null);
      if (currIdx === -1) {
        return state;
      };
      const newSequenceWithAdd = [...state.sequence];
      const block = { ...soundInfo[state.category][action.sound] };
      block.id = currIdx;
      block.pitch = 'medium';
      newSequenceWithAdd[currIdx] = block;
      return { ...state, sequence: newSequenceWithAdd  };

    case REMOVE_FROM_SEQUENCE:
      const newSequenceWithRemove = [...state.sequence];
      newSequenceWithRemove[action.id] = null;
      return { ...state, sequence: newSequenceWithRemove };

    case PLAY_SEQUENCE:
      const start = now();
      for (let i = 0; i < state.sequence.length; i++) {
        const { sound, pitch } = state.sequence[i]
        const seconds = i * 4;
        if (sound === null) {
          continue;
        } else {
          sound.triggerAttackRelease(`C${pitches[pitch]}`, '2m', start + seconds)
        }
      }
      return state;

    case RESET_SEQUENCE:
      return { ...state, sequence: [null, null, null, null] }

    case SET_PITCH:
      const newSequenceDifferentPitch = [...state.sequence];
      newSequenceDifferentPitch[action.id].pitch = action.pitch;
      return { ...state, sequence: newSequenceDifferentPitch };
    default:
      return state;
  };
};