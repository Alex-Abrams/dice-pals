import DiceSix from '../screens/dice_six';
import DiceFive from '../screens/dice_five';
import DiceFour from '../screens/dice_four';
import DiceThree from '../screens/dice_three';
import DiceTwo from '../screens/dice_two';
import DiceOne from '../screens/dice_one';
import { display20Die, displaySixDie, display4Die, display8Die } from '../screens/dice_functions';
import { rollDiceArray, sumTotalDice } from './roll_functions';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const dice_hash = [{'dice': <DiceOne />, 'num': 1 }, {'dice': <DiceTwo />, 'num': 2 }, {'dice':  <DiceThree />, 'num': 3 }, {'dice': <DiceFour />, 'num': 4 },
  {'dice': <DiceFive />, 'num': 5 }, {'dice': <DiceSix />, 'num': 6 }];


export function switchDiceType(dice_type, dice_number_array, total_dice) {
const dice_six_array = [<DiceOne />, <DiceTwo />,  <DiceThree />,  <DiceFour />,  <DiceFive />, <DiceSix /> ];

  switch(dice_type) {
  case ('dice-6'):
    return displaySixDie(dice_six_array, dice_number_array[0], total_dice);

  case ('dice-4'):
    return display4Die(dice_number_array[2], total_dice);

  case ('dice-8'):
  return display8Die(dice_number_array[3], total_dice);
    return;

  case ('dice-10'):
    return;

  case ('dice-12'):
    return;

  case ('dice-20'):
    return display20Die(dice_number_array[1], total_dice);
  default:
    return null;
};
}
// this will take the store's dice_array, best course for full access
// so all i should need is sum total dice and added it to the store
export function switchDiceTotal(dice_array, total_dice, dice_type) {
  // console.log('thing', dice_array, total_dice, dice_type);

  switch(dice_type) {

  case ('dice-6'):
  // console.log('dicearrarryy', dice_array[0][0]);
    return sumTotalDice(dice_array[0], total_dice);

  case ('dice-4'):
    return sumTotalDice(dice_array[2], total_dice);
  //
  case ('dice-8'):
    return sumTotalDice(dice_array[3], total_dice);
  //
  // case ('dice-10'):
  //   return sumTotalDice(dice_array, total_dice);
  //
  // case ('dice-12'):
  //   return sumTotalDice(dice_array, total_dice);

  case ('dice-20'):
    return sumTotalDice(dice_array[1], total_dice);
  default:
    return null;
};
}

// displaySixDie(dice_hash, dice_number_array, this.state.total_dice)
