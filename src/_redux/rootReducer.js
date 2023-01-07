import { configureStore } from '@reduxjs/toolkit';

import generalReducer from './_general/generalReducer';
import settingsReducer from './settings/settingsReducer';
import musicDecoderReducer from './music-decoder/musicDecoderReducer';
import jumpIntoRhythmReducer from './jump-into-rhythm/jumpIntoRhythmReducer';
import sequenceMakerReducer from './sequence-maker/sequenceMakerReducer';
import listeningSkillsTestReducer from './instrument-id/listening-skills/listeningSkillsTestReducer';
import songMakerReducer from './instrument-id/song-maker/songMakerReducer';
import freePaintReducer from './free-paint/freePaintReducer';
import colorTheoryReducer from './color-theory/colorTheoryReducer';
import scoreKeeperReducer from './score-keeper/scoreKeeperReducer';
import moodMeterReducer from './mood-meter/moodMeterReducer';

const rootReducer = configureStore({
  reducer: {
    general: generalReducer,
    settings: settingsReducer,
    musicDecoder: musicDecoderReducer,
    sequenceMaker: sequenceMakerReducer,
    jumpIntoRhythm: jumpIntoRhythmReducer,
    listeningSkillsTest: listeningSkillsTestReducer,
    songMaker: songMakerReducer,
    freePaint: freePaintReducer,
    colorTheory: colorTheoryReducer,
    scoreKeeper: scoreKeeperReducer,
    moodMeter: moodMeterReducer,
  }
});

export default rootReducer;