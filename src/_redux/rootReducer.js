import { configureStore } from '@reduxjs/toolkit';

import mainSettingsReducer from './settings/mainSettingsReducer';
import musicDecoderReducer from './music-decoder/musicDecoderReducer';
import sequenceMakerReducer from './sequence-maker/sequenceMakerReducer';
import scoreKeeperReducer from './score-keeper/scoreKeeperReducer';
import instrumentIdReducer from './instrument-id/instrumentIdReducer';
import jumpIntoRhythmReducer from './jump-into-rhythm/jumpIntoRhythmReducer';
import freePaintReducer from './free-paint/freePaintReducer';
import colorTheoryReducer from './color-theory/colorTheoryReducer';

const rootReducer = configureStore({
  reducer: {
    mainSettings: mainSettingsReducer,
    musicDecoder: musicDecoderReducer,
    sequenceMaker: sequenceMakerReducer,
    scoreKeeper: scoreKeeperReducer,
    instrumentId: instrumentIdReducer,
    jumpIntoRhythm: jumpIntoRhythmReducer,
    freePaint: freePaintReducer,
    colorTheory: colorTheoryReducer
  }
});

export default rootReducer;