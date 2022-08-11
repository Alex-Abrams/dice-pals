import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TwentySided from '../dice_displays/20_sided/20_sided';

export function displaySixDie(die, dice_number_array, total_dice) {
  const the_dice = dice_number_array.slice(0, total_dice);
  // this will map out the total amount of dice depending how mmuch the user has hit the 'add dice button'
  return(
    <View style={styles.dice_container}>
      {the_dice.map((dice, i) =>
        <View style={styles.dice_box} key={i}>
          {die[dice_number_array[i]].dice}
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
