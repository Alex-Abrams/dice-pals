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


// console.log(rollDiceArray(6));
// console.log(rollDiceArray(20));
// console.log(rollDiceArray(4));
// console.log(rollDiceArray(12));
// console.log(rollDiceArray(8));
