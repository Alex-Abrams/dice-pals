export function rollDiceArray(max) {
  let dice_array = [];
  let roll = Math.floor(Math.random() * max) + 1;
  const max_dice = 6;

  for(let i = 0; i < max_dice; i++) {
    const roll = Math.floor(Math.random() * max) + 1;
    dice_array.push(roll);
  };

  return dice_array;
}

export function sumTotalDice(dice_array, total_dice) {
  const chosen_dice = dice_array.slice(0, total_dice);
  const total = chosen_dice.reduce((partialSum, a) => partialSum + a, 0);
  return total;
}
