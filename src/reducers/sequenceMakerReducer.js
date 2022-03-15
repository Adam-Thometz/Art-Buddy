import { ADD_TO_SEQUENCE, CHANGE_CATEGORY, REMOVE_FROM_SEQUENCE } from "../actionTypes";

const INITIAL_STATE = {
  category: '',
  sequence: [null, null, null, null],
};

/**
 * TODO
 * 
 * Flesh out add and remove commands
 */

export default function sequenceMaker(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return { 
        ...state, 
        category: action.category,
        sequence: [null, null, null, null] 
      };
    case ADD_TO_SEQUENCE:
      return { ...state  };
    case REMOVE_FROM_SEQUENCE:
      return { ...state  }
    default:
      return state;
  };
};