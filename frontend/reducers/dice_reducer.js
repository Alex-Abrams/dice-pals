import {
  RECEIVE_DICE_SELECTION
} from '../actions/modal_actions';

const diceReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DICE_SELECTION:
      return Object.assign({}, state, {['selection']: action.dice_selection});
    default:
      return state;
  }
};

export default diceReducer;
