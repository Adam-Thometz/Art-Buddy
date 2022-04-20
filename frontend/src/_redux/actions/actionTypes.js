// Action types for authentication
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';
export const ERROR = 'ERROR';

// Action types for Word to Music Decoder
export const wordToMusicActions = {
  CREATE_WORD: 'CREATE_WORD',
  ADD_WORD: 'ADD_WORD',
  FILL_LETTER: 'FILL_LETTER',
  PLAY_MELODY: 'PLAY_MELODY'
}

// Action types for Sequence Maker
export const sequenceMakerActions = {
  CHANGE_CATEGORY: 'CHANGE_CATEGORY',
  ADD_TO_SEQUENCE: 'ADD_TO_SEQUENCE',
  REMOVE_FROM_SEQUENCE: 'REMOVE_FROM_SEQUENCE',
  PLAY_SEQUENCE: 'PLAY_SEQUENCE',
  RESET_SEQUENCE: 'RESET_SEQUENCE',
  SET_PITCH: 'SET_PITCH'
}

// Action types for Score Keeper
export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const ADD_POINT = 'ADD_POINT';
export const REMOVE_POINT = 'REMOVE_POINT';