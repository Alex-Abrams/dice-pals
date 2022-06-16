import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import DiceSix from './dice_six';
import DiceFive from './dice_five';
import DiceFour from './dice_four';
import DiceThree from './dice_three';
import DiceTwo from './dice_two';
import DiceOne from './dice_one';


class FrontPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }



  render() {
    return(
      <View style={{}}>

        <View style={styles.dice_container}>

          <View style={styles.dice_box}>
            <DiceOne />
          </View>

          <View style={styles.dice_box}>
          <DiceTwo />
          </View>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  dice_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingTop: 100,
  },
  dice_box: {
    backgroundColor: 'purple',
    borderWidth: 5,
    height: 110,
    width: 110,
    borderRadius: 8,
    paddingTop: 5,
  },
});


export default FrontPage;
