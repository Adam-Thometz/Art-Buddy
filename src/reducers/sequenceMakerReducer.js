import { ADD_TO_SEQUENCE, CHANGE_CATEGORY, REMOVE_FROM_SEQUENCE } from "../actionTypes";

import soundInfo from "../sequence-maker/soundInfo";

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
        category: action.category,
        sequence: [null, null, null, null] 
      };

    case ADD_TO_SEQUENCE:
      const currIdx = state.sequence.indexOf(null);
      if (currIdx === -1) {
        return;
      };
      const newSequenceWithAdd = [...state.sequence];
      const block = { ...soundInfo[state.category][action.sound] };
      block.id = currIdx;
      console.log(block.id);
      newSequenceWithAdd[currIdx] = block;
      return { ...state, sequence: newSequenceWithAdd  };

    case REMOVE_FROM_SEQUENCE:
      const newSequenceWithRemove = [...state.sequence];
      newSequenceWithRemove[action.id] = null;
      return { ...state, sequence: newSequenceWithRemove };

    default:
      return state;
  };
};