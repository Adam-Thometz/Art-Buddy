import { instrumentIdActions } from "../actions/actionTypes"

const INITIAL_STATE = {
  mode: null
}

const {
  CHANGE_MODE
} = instrumentIdActions

export default function instrumentIdReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return { ...state, mode: action.mode };
    default:
      return state;
  }
}