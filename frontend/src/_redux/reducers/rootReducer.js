import { combineReducers } from 'redux';

import wordToMusicDecoderReducer from './wordToMusicDecoderReducer';
import sequenceMakerReducer from './sequenceMakerReducer';
import scoreKeeperReducer from './scoreKeeperReducer';
import instrumentIdReducer from './instrumentIdReducer';
import userInfoReducer from './userReducer';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  wordToMusic: wordToMusicDecoderReducer,
  sequenceMaker: sequenceMakerReducer,
  scoreKeeper: scoreKeeperReducer,
  instrumentId: instrumentIdReducer
});

export default rootReducer;