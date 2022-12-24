import { configureStore } from '@reduxjs/toolkit';

import mainSettingsReducer from './settings/mainSettingsReducer';
import musicDecoderReducer from './music-decoder/musicDecoderReducer';
import jumpIntoRhythmReducer from './jump-into-rhythm/jumpIntoRhythmReducer';
import sequenceMakerReducer from './sequence-maker/sequenceMakerReducer';
import listeningSkillsTestReducer from './instrument-id/listening-skills/listeningSkillsTestReducer';
import songMakerReducer from './instrument-id/song-maker/songMakerReducer';
import freePaintReducer from './free-paint/freePaintReducer';
import colorTheoryReducer from './color-theory/colorTheoryReducer';
import scoreKeeperReducer from './score-keeper/scoreKeeperReducer';

const rootReducer = configureStore({
  reducer: {
    mainSettings: mainSettingsReducer,
    musicDecoder: musicDecoderReducer,
    sequenceMaker: sequenceMakerReducer,
    listeningSkillsTest: listeningSkillsTestReducer,
    songMaker: songMakerReducer,
    scoreKeeper: scoreKeeperReducer,
    jumpIntoRhythm: jumpIntoRhythmReducer,
    freePaint: freePaintReducer,
    colorTheory: colorTheoryReducer
  }
});

export default rootReducer;