import TwentySided from '../dice_displays/20_sided';
import FourSided from '../dice_displays/four_sided';
import DiceSix from './dice_six';
import DiceFive from './dice_five';
import DiceFour from './dice_four';
import DiceThree from './dice_three';
import DiceTwo from './dice_two';
import DiceOne from './dice_one';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const dice_hash = [{'dice': <DiceOne />, 'num': 1 }, {'dice': <DiceTwo />, 'num': 2 }, {'dice':  <DiceThree />, 'num': 3 }, {'dice': <DiceFour />, 'num': 4 },
  {'dice': <DiceFive />, 'num': 5 }, {'dice': <DiceSix />, 'num': 6 }];

function switchDiceType(dice_type, dice_number_array, this.state.total_dice) {
  switch(thing) {
  case ('dice-6'):
    return 'the usa';
  // case RECEIVE_WORKOUT_LIFTS:
  case ('dice-4'):
    return <FourSided />;

  case ('dice-8'):
    return;

  case ('dice-10'):
    return;

  case ('dice-12'):
    return;

  case ('dice-20'):
    return;
  default:
    return null;
};
}

export function switchDiceTotal() {

}
