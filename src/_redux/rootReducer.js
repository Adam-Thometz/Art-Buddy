import { configureStore } from '@reduxjs/toolkit';

import mainSettingsReducer from './settings/mainSettingsReducer';
import wordToMusicDecoderReducer from './music-decoder/wordToMusicDecoderReducer';
import sequenceMakerReducer from './reducers/sequenceMakerReducer';
import scoreKeeperReducer from './reducers/scoreKeeperReducer';
import instrumentIdReducer from './reducers/instrumentIdReducer';

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