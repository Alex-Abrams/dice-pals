import { combineReducers } from 'redux';
import diceReducer from './dice_reducer';

const rootReducer = combineReducers({
  dice: diceReducer,
});

export default rootReducer;
