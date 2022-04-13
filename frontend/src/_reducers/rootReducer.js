import { combineReducers } from 'redux';

import wordToMusicDecoderReducer from './wordToMusicDecoderReducer';
import sequenceMakerReducer from './sequenceMakerReducer';
import scoreKeeperReducer from './scoreKeeperReducer';
import userInfoReducer from './userReducer';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  wordToMusic: wordToMusicDecoderReducer,
  sequenceMaker: sequenceMakerReducer,
  scoreKeeper: scoreKeeperReducer
});

export default rootReducer;