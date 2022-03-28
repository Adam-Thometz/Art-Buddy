import { combineReducers } from 'redux';

import wordToMusicDecoderReducer from './wordToMusicDecoderReducer';
import sequenceMakerReducer from './sequenceMakerReducer';
import freezeDanceReducer from './freezeDanceReducer';
import userInfoReducer from './userReducer';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  wordToMusic: wordToMusicDecoderReducer,
  sequenceMaker: sequenceMakerReducer,
  freezeDance: freezeDanceReducer
});

export default rootReducer;