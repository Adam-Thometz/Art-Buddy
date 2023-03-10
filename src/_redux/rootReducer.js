import { configureStore } from "@reduxjs/toolkit";

// General/Settings
import generalReducer from "./_general/generalReducer";
import settingsReducer from "./settings/settingsReducer";

// Music Games
import musicDecoderReducer from "./music-decoder/musicDecoderReducer";
import jumpIntoRhythmReducer from "./jump-into-rhythm/jumpIntoRhythmReducer";
import sequenceMakerReducer from "./sequence-maker/sequenceMakerReducer";
import listeningSkillsTestReducer from "./instrument-id/listening-skills/listeningSkillsTestReducer";
import songMakerReducer from "./instrument-id/song-maker/songMakerReducer";

// Art Games
import freePaintReducer from "./free-paint/freePaintReducer";
import colorTheoryReducer from "./color-theory/colorTheoryReducer";

// Tools
import scoreKeeperReducer from "./score-keeper/scoreKeeperReducer";
import moodMeterReducer from "./mood-meter/moodMeterReducer";
import timeKeeperReducer from "./time-keeper/timeKeeperReducer";

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
    timeKeeper: timeKeeperReducer,
  },
});

export default rootReducer;
