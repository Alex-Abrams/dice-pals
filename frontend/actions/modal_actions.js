export const RECEIVE_DICE_SELECTION = "RECEIVE_DICE_SELECTION";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const receiveDiceSelection = (dice_selection) => ({
  type: RECEIVE_DICE_SELECTION,
  dice_selection,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});
