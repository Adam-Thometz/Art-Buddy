import { combineReducers } from 'redux';

import wordToMusicDecoderReducer from './wordToMusicDecoderReducer';
import sequenceMakerReducer from './sequenceMakerReducer';
import freezeDanceReducer from './freezeDanceReducer';

const rootReducer = combineReducers({
  wordToMusicDecoder: wordToMusicDecoderReducer,
  sequenceMaker: sequenceMakerReducer,
  freezeDance: freezeDanceReducer
});

export default rootReducer;