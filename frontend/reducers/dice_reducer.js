import {
  RECEIVE_DICE_SELECTION,
  TOGGLE_MODAL,
  RECEIVE_DICE_ROLLS,
} from '../actions/modal_actions';

const diceReducer = (state = {toggled: false, selection: 'dice-six'}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DICE_SELECTION:
      return Object.assign({}, state, {selection: action.dice_selection});

    case TOGGLE_MODAL:
      return Object.assign({}, state, {toggled: !state.toggled});

    case RECEIVE_DICE_ROLLS:
      return Object.assign({}, state, {rolls: action.rolls});
    default:
      return state;
  }
};

export default diceReducer;
