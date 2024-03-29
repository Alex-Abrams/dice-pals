import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TwentySided from '../dice_displays/20_sided';
import FourSided from '../dice_displays/four_sided';
import EightSided from '../dice_displays/eight_sided';
import TwelveSided from '../dice_displays/12_sided';
import TenSided from '../dice_displays/ten_sided';

export function displaySixDie(dice_six_array, dice_number_array, total_dice) {
  const the_dice = dice_number_array.slice(0, total_dice); // [1, 6]
  // this will map out the total amount of dice depending how mmuch the user has hit the 'add dice button'
  return(
    <View style={styles.dice_container}>
      {the_dice.map((dice, i) =>
        <View style={styles.dice_box} key={i}>
          {dice_six_array[dice_number_array[i] - 1]}
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
  const the_dice = dice4_array.slice(0, total_dice);
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

export function display8Die(dice8_array, total_dice) {
  const the_dice = dice8_array.slice(0, total_dice);
  return(
    <View style={styles.dice_container}>
      {the_dice.map((dice, i) =>
        <View key={i}>
          <EightSided roll={dice8_array[i]} />
        </View>
      )}
    </View>
  );
}

export function display12Die(dice12_array, total_dice) {
  const the_dice = dice12_array.slice(0, total_dice);
  return(
    <View style={styles.dice_container}>
      {the_dice.map((dice, i) =>
        <View key={i}>
          <TwelveSided roll={dice12_array[i]} />
        </View>
      )}
    </View>
  );
}

export function display10Die(dice10_array, total_dice) {
  const the_dice = dice10_array.slice(0, total_dice);
  return(
    <View style={styles.dice_container}>
      {the_dice.map((dice, i) =>
        <View key={i}>
          <TenSided roll={dice10_array[i]} />
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
