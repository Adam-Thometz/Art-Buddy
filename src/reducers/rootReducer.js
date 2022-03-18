import { combineReducers } from 'redux';

import musicColorsReducer from './wordToMusicDecoderReducer';
import sequenceMakerReducer from './sequenceMakerReducer';
import freezeDanceReducer from './freezeDanceReducer';

const rootReducer = combineReducers({
  musicColors: musicColorsReducer,
  sequenceMaker: sequenceMakerReducer,
  freezeDance: freezeDanceReducer
});

export default rootReducer;