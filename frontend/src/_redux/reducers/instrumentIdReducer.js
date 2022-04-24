import { instrumentIdActions } from "../actions/actionTypes"

const INITIAL_STATE = {
  mode: null,
  currFamily: null
}

const {
  CHANGE_MODE,
  CHANGE_FAMILY
} = instrumentIdActions;

export default function instrumentIdReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return { ...state, mode: action.mode };
    case CHANGE_FAMILY:
      return { ...state, currFamily: action.family }
    default:
      return state;
  }
}