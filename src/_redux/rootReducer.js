import { configureStore } from '@reduxjs/toolkit';

import mainSettingsReducer from './settings/mainSettingsReducer';
import musicDecoderReducer from './music-decoder/musicDecoderReducer';
import sequenceMakerReducer from './sequence-maker/sequenceMakerReducer';
import scoreKeeperReducer from './score-keeper/scoreKeeperReducer';
import instrumentIdReducer from './instrument-id/instrumentIdReducer';

const rootReducer = configureStore({
  reducer: {
    mainSettings: mainSettingsReducer,
    musicDecoder: musicDecoderReducer,
    sequenceMaker: sequenceMakerReducer,
    scoreKeeper: scoreKeeperReducer,
    instrumentId: instrumentIdReducer
  }
});

export default rootReducer;