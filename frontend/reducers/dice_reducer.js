import {
  RECEIVE_DICE_SELECTION,
  TOGGLE_MODAL,
} from '../actions/modal_actions';

const diceReducer = (state = {toggled: false, selection: 'dice-six'}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DICE_SELECTION:
      return Object.assign({}, state, {selection: action.dice_selection});
    case TOGGLE_MODAL:
      console.log(state.toggled);
      return Object.assign({}, state, {toggled: !state.toggled});
    default:
      return state;
  }
};

export default diceReducer;
