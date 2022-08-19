export const RECEIVE_DICE_SELECTION = "RECEIVE_DICE_SELECTION";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const receiveDiceSelection = (dice_selection) => ({
  type: RECEIVE_DICE_SELECTION,
  dice_selection,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

// add the array of rolls to the store
// so that the switch_dice.js file can accept just 1 variable instead of long booleans
export const receiveDiceRolls = (rolls) => ({
  type: RECEIVE_DICE_ROLLS,
  rolls,
});
