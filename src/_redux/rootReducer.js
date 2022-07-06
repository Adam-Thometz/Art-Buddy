import { configureStore } from '@reduxjs/toolkit';

import mainSettingsReducer from './settings/mainSettingsReducer';
import wordToMusicDecoderReducer from './music-decoder/wordToMusicDecoderReducer';
import sequenceMakerReducer from './sequence-maker/sequenceMakerReducer';
import scoreKeeperReducer from './score-keeper/scoreKeeperReducer';
import instrumentIdReducer from './instrument-id/instrumentIdReducer';

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