import { configureStore } from '@reduxjs/toolkit';

import mainSettingsReducer from './settings/mainSettingsReducer';
import musicDecoderReducer from './music-decoder/musicDecoderReducer';
import jumpIntoRhythmReducer from './jump-into-rhythm/jumpIntoRhythmReducer';
import sequenceMakerReducer from './sequence-maker/sequenceMakerReducer';
import idListeningSkillsTestReducer from './instrument-id/listening-skills/idListeningSkillsReducer';
import idSongMakerReducer from './instrument-id/song-maker/idSongMakerReducer';
import freePaintReducer from './free-paint/freePaintReducer';
import colorTheoryReducer from './color-theory/colorTheoryReducer';
import scoreKeeperReducer from './score-keeper/scoreKeeperReducer';

const rootReducer = configureStore({
  reducer: {
    mainSettings: mainSettingsReducer,
    musicDecoder: musicDecoderReducer,
    sequenceMaker: sequenceMakerReducer,
    listeningSkillsTest: idListeningSkillsTestReducer,
    songMaker: idSongMakerReducer,
    scoreKeeper: scoreKeeperReducer,
    jumpIntoRhythm: jumpIntoRhythmReducer,
    freePaint: freePaintReducer,
    colorTheory: colorTheoryReducer
  }
});

export default rootReducer;