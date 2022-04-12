import { ERROR, SET_TOKEN, SET_USER } from "../_actions/actionTypes";
import ArtBuddyApi from "../api";

const INITIAL_STATE = {
  user: {
    username: '',
    students: []
  },
  token: '',
  error: false
}

export default function userInfoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TOKEN:
      ArtBuddyApi.token = action.token
      return { ...state, token: action.token };
    case SET_USER:
      return { ...state, user: action.user };
    case ERROR:
      return { ...state, error: true }
    default:
      return state;
  }
}