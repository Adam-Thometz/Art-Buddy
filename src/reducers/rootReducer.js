import { combineReducers } from 'redux';
import musicColorsReducer from './musicColorsReducer';
import sequenceMakerReducer from './sequenceMakerReducer';

const rootReducer = combineReducers({
  musicColors: musicColorsReducer,
  sequenceMaker: sequenceMakerReducer
});

export default rootReducer;