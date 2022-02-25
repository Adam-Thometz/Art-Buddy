import { combineReducers } from 'redux';
import musicColorsReducer from './musicColorsReducer'

const rootReducer = combineReducers({
  musicColors: musicColorsReducer
})

export default rootReducer;