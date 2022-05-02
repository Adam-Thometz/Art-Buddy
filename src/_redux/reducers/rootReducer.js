// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import mainSettingsReducer from './mainSettingsReducer';
import wordToMusicDecoderReducer from './wordToMusicDecoderReducer';
import sequenceMakerReducer from './sequenceMakerReducer';
import scoreKeeperReducer from './scoreKeeperReducer';
import instrumentIdReducer from './instrumentIdReducer';

const rootReducer = configureStore({
  reducer: {
    mainSettings: mainSettingsReducer,
    wordToMusic: wordToMusicDecoderReducer,
    sequenceMaker: sequenceMakerReducer,
    scoreKeeper: scoreKeeperReducer,
    instrumentId: instrumentIdReducer
  }
});

export default rootReducer;