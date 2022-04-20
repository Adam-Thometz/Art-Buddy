import { ADD_TO_SEQUENCE, CHANGE_CATEGORY, REMOVE_FROM_SEQUENCE, RESET_SEQUENCE, SET_PITCH } from "../actions/actionTypes";

import soundInfo from "../../sequence-maker/_media/soundInfo";

const INITIAL_STATE = {
  category: '',
  sequence: [null, null, null, null],
};

//  TODO: Play sequence using sounds

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
      console.log(block);
      newSequenceWithAdd[currIdx] = block;
      return { ...state, sequence: newSequenceWithAdd  };

    case REMOVE_FROM_SEQUENCE:
      const newSequenceWithRemove = [...state.sequence];
      newSequenceWithRemove[action.id] = null;
      return { ...state, sequence: newSequenceWithRemove };

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