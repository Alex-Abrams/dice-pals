import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TwentySided from '../dice_displays/20_sided';
import FourSided from '../dice_displays/four_sided';

export function displaySixDie(dice_six_array, dice_number_array, total_dice) {
  // (displaySixDie(dice_hash, dice_number_array, this.state.total_dice))
  const the_dice = dice_number_array.slice(0, total_dice); // [1, 2, 3]
  // this will map out the total amount of dice depending how mmuch the user has hit the 'add dice button'
  return(
    <View style={styles.dice_container}>
      {the_dice.map((dice, i) =>
        <View style={styles.dice_box} key={i}>
          {dice_six_array[dice_number_array[i]]}
        </View>
      )}

    </View>
  );
}

export function display20Die(dice20_array, total_dice) {

  const the_dice = dice20_array.slice(0, total_dice);
  return(
    <View style={styles.dice_container}>
      {the_dice.map((dice, i) =>
        <View key={i}>
          <TwentySided roll={dice20_array[i]} />
        </View>
      )}
    </View>
  );
}

export function display4Die(dice4_array, total_dice) {
  const the_dice = dice20_array.slice(0, total_dice);

  return(
    <View style={styles.dice_container}>
      {the_dice.map((dice, i) =>
        <View key={i}>
          <FourSided roll={dice4_array[i]} />
        </View>
      )}
    </View>
  );
}

export function sumDice(dice_array, total_dice, dice_type) {
  const chosen_dice = dice_array.slice(0, total_dice);
  let result = chosen_dice.reduce((partialSum, a) => partialSum + a, 0); // total of dice
  if (dice_type) {
    return result + (total_dice); // the Math.random will not let me at the 1s to the dice anywhere else
  } else {
    return result;
  };
}

const styles = StyleSheet.create({
  dice_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 20,
    // alignSelf: 'center'
    // paddingTop: 100,
  },
  dice_box: {
    backgroundColor: '#ffffff',
    borderWidth: 5,
    height: 110,
    width: 110,
    borderRadius: 8,
    paddingTop: 5,
    marginRight: 5,
    marginTop: 3,
  },
});
