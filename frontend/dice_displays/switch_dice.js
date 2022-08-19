import TwentySided from '../dice_displays/20_sided';
import FourSided from '../dice_displays/four_sided';
import DiceSix from '../screens/dice_six';
import DiceFive from '../screens/dice_five';
import DiceFour from '../screens/dice_four';
import DiceThree from '../screens/dice_three';
import DiceTwo from '../screens/dice_two';
import DiceOne from '../screens/dice_one';
import { display20Die, displaySixDie, display4Die } from '../screens/dice_functions';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const dice_hash = [{'dice': <DiceOne />, 'num': 1 }, {'dice': <DiceTwo />, 'num': 2 }, {'dice':  <DiceThree />, 'num': 3 }, {'dice': <DiceFour />, 'num': 4 },
  {'dice': <DiceFive />, 'num': 5 }, {'dice': <DiceSix />, 'num': 6 }];

export function switchDiceType(dice_type, dice_number_array, total_dice) {

  switch(dice_type) {
  case ('dice-6'):
    return displaySixDie(dice_hash, dice_number_array, total_dice);

  case ('dice-4'):
    return <FourSided />;

  case ('dice-8'):
    return;

  case ('dice-10'):
    return;

  case ('dice-12'):
    return;

  case ('dice-20'):
    return display20Die(dice_number_array, total_dice);
  default:
    return null;
};
}

export function switchDiceTotal() {

}

// displaySixDie(dice_hash, dice_number_array, this.state.total_dice)
// display20Die(dice20_array, this.state.total_dice
