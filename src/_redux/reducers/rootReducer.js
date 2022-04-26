import { combineReducers } from 'redux';

import wordToMusicDecoderReducer from './wordToMusicDecoderReducer';
import sequenceMakerReducer from './sequenceMakerReducer';
import scoreKeeperReducer from './scoreKeeperReducer';
import instrumentIdReducer from './instrumentIdReducer';

const rootReducer = combineReducers({
  wordToMusic: wordToMusicDecoderReducer,
  sequenceMaker: sequenceMakerReducer,
  scoreKeeper: scoreKeeperReducer,
  instrumentId: instrumentIdReducer
});

export default rootReducer;