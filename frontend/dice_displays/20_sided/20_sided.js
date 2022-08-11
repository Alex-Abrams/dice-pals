import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class TwentySided extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dice_roll_20: 1,
    };
  }

  // rollOneThro20(max) {
  //   return Math.floor(Math.random() * max); // roll a number between 1-6 randomly
  // }
  //
  // runDiceAnimation() {
  //   // this will use timer intervals to change the dice from 1-6 randomly
  //   // to simulate rolling the dice
  //
  //   let counter = 0;
  //   let oneSecInterval = setInterval(() => {
  //     this.setState({ dice_roll_20: this.rollOneThroSix(20)});
  //
  //     counter += 1;
  //     if (counter === 20) {
  //       clearInterval(oneSecInterval);
  //     };
  //   }, 100); // set interval timing here
  // }


  render() {
    const { roll } = this.props;
    const display_number = (5 < 9) ? (
        <Text style={styles.single_number}>1</Text>
    ) : (
        <Text style={styles.double_number}>1</Text>
    );

    return(
      <View style={{ alignItems: 'center'}}>
        <Image source={require('../../images/cropped_20_sided.png')} style={{ height: 120, width: 120}} />
        <Text style={styles.single_number}>12</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  single_number: {
    position: 'absolute',
    zIndex: 100,
    // left: '45%',
    top: '40%',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    // alignContent: 'center',
    // alignSelf: 'center',
  },
  double_number : {
    // position: 'absolute',
    // zIndex: 100,
    // fontSize: 24,
    // fontWeight: 'bold',
    // color: 'black',
    // left: '40%',
    // top: '40%',
    // alignContent: 'center',
    // alignSelf: 'center',
  },
})

export default TwentySided;
