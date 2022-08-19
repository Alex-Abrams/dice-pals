import {
  RECEIVE_DICE_SELECTION,
  TOGGLE_MODAL,
  RECEIVE_DICE_ROLLS,
} from '../actions/modal_actions';

const diceReducer = (state = {toggled: false, selection: 'dice-6'}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DICE_SELECTION:
      return Object.assign({}, state, {selection: action.dice_selection});

    case TOGGLE_MODAL:
      return Object.assign({}, state, {toggled: !state.toggled});

    case RECEIVE_DICE_ROLLS:
      return Object.assign({}, state, {rolls: action.rolls});

    // case RECEIVE_DICE_ARRAY: // DONT NEED DELETE LATER
    //   return Object.assign({}, state, {dice_array: action.dice_array});
    default:
      return state;
  }
};

export default diceReducer;
