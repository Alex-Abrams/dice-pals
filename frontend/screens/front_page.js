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
      count: 0,
      dice_roll_1: 0,
      dice_roll_2: 0,
      dice_roll_3: 0,
    };

  }



  rollOneThroSix(max) {
    return Math.floor(Math.random() * max); // roll a number between 1-6 randomly
  }

  componentDidMount() {
    this.setState({ dice_roll_1: this.rollOneThroSix(6)});
    this.setState({ dice_roll_2: this.rollOneThroSix(6)});
    this.setState({ dice_roll_3: this.rollOneThroSix(6)});
  }

  runDiceAnimation() {
    // this will use timer intervals to change the dice from 1-6 randomly
    // to simulate rolling the dice
    let counter = 0;
    let oneSecInterval = setInterval(() => {
      this.setState({ dice_roll_1: this.rollOneThroSix(6)});
      this.setState({ dice_roll_2: this.rollOneThroSix(6)});
      this.setState({ dice_roll_3: this.rollOneThroSix(6)});
      counter += 1;
      console.log('el countadaor', counter);
      if (counter === 20) {
        console.log('aowndolanwolnd');
        clearInterval(oneSecInterval);
      };
    }, 100); // set interval timing here

  }




  render() {
    let dice_number_1 = this.state.dice_roll_1;
    let dice_number_2 = this.state.dice_roll_2;
    let dice_number_3 = this.state.dice_roll_3;
    const dice_array = [<DiceOne />, <DiceTwo />, <DiceThree />, <DiceFour />, <DiceFive />, <DiceSix />];

    return(
      <View style={{backgroundColor: 'yellow', height: '100%' }}>
        <View>

        <View style={styles.dice_container}>

            <View style={styles.dice_box}>
              {dice_array[dice_number_1]}
            </View>

            <View style={styles.dice_box}>
              {dice_array[dice_number_2]}
            </View>

            <View style={styles.dice_box}>
              {dice_array[dice_number_3]}
            </View>


        </View>


        </View>

          <View style={styles.button_view}>
          <Button
          title="hello"
          onPress={() => this.runDiceAnimation()}
          buttonStyle={{color: 'red'}}></Button>
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
    flexWrap: 'wrap',
    // alignSelf: 'center'
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
  button_view: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
});


export default FrontPage;
