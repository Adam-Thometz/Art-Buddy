// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import wordToMusicDecoderReducer from './wordToMusicDecoderReducer';
import sequenceMakerReducer from './sequenceMakerReducer';
import scoreKeeperReducer from './scoreKeeperReducer';
import instrumentIdReducer from './instrumentIdReducer';

const rootReducer = configureStore({
  reducer: {
    wordToMusic: wordToMusicDecoderReducer,
    sequenceMaker: sequenceMakerReducer,
    scoreKeeper: scoreKeeperReducer,
    instrumentId: instrumentIdReducer
  }
});

export default rootReducer;