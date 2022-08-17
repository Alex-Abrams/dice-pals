import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, ImageBackground, Image, Pressable } from 'react-native';
import DiceSix from './dice_six';
import DiceFive from './dice_five';
import DiceFour from './dice_four';
import DiceThree from './dice_three';
import DiceTwo from './dice_two';
import DiceOne from './dice_one';
// import TwentySided from '../dice_displays/20_sided';
import FourSided from '../dice_displays/four_sided';

import { displaySixDie, display20Die, sumDice }from './dice_functions';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      dice_roll_1: 1,
      dice_roll_2: 1,
      dice_roll_3: 1,
      dice_roll_4: 1,
      dice_roll_5: 1,
      dice_roll_6: 1,
      dice_roll_20: 1,
      dice_roll_21: 5,
      dice_roll_22: 16,
      dice_roll_23: 7,
      dice_roll_24: 12,
      dice_roll_25: 19,
      total_dice: 2, // always start at 2 dice, lowest will be 1
      show_total: false,
      dice_type: true, // change around later for didferent dice types, also see 'sumDice'
      type_of_dice: '6-sided',
    };

  }


  rollDice(max) {
    return Math.floor(Math.random() * max); // roll a number between 1-6 randomly

  }

  componentDidMount() { // have the dice randomly rolled when the screen is loaded.
    this.setState({ dice_roll_1: this.rollDice(6)});
    this.setState({ dice_roll_2: this.rollDice(6)});
    this.setState({ dice_roll_3: this.rollDice(6)});
  }

  runDiceAnimation() {
    // this will use timer intervals to change the dice from 1-6 randomly
    // to simulate rolling the dice
    this.setState({show_total: false}); // dont show total while rolling die
    let counter = 0;
    let oneSecInterval = setInterval(() => {
      this.setState({ dice_roll_1: this.rollDice(6)});
      this.setState({ dice_roll_2: this.rollDice(6)});
      this.setState({ dice_roll_3: this.rollDice(6)});
      this.setState({ dice_roll_4: this.rollDice(6)});
      this.setState({ dice_roll_5: this.rollDice(6)});
      this.setState({ dice_roll_6: this.rollDice(6)});
      this.setState({ dice_roll_20: this.rollDice(20) + 1 });
      this.setState({ dice_roll_21: this.rollDice(20) + 1 });
      this.setState({ dice_roll_22: this.rollDice(20) + 1 });
      this.setState({ dice_roll_23: this.rollDice(20) + 1 });
      this.setState({ dice_roll_24: this.rollDice(20) + 1 });
      this.setState({ dice_roll_25: this.rollDice(20) + 1 });
      counter += 1;
      if (counter === 20) {
        clearInterval(oneSecInterval);
        this.setState({show_total: true}); // once counter hits 20 show the total
      };
    }, 100); // set interval timing here
  }


  addOrSubTractDice(plus_or_minus) {
    if (plus_or_minus === "minus" && this.state.total_dice > 1) {
      this.setState({ total_dice: this.state.total_dice - 1});
    } else if (plus_or_minus === "plus" && this.state.total_dice < 6) {
      this.setState({ total_dice: this.state.total_dice + 1});
    } else {
      console.log('Out of dice range');
    }

  }

  showTotal(dice_number_array) {
    const display_total = (this.state.show_total) ? (
      <Text style={styles.total_text}>Total: {sumDice(dice_number_array, this.state.total_dice, this.state.dice_type)}</Text>
      ) : (
        null
    );

    return(
      <View>
        {display_total}
      </View>
    );
  }

  changeDiceType() {
    this.setState({dice_type: !this.state.dice_type});
  }


  render() {
    let dice_number_1 = this.state.dice_roll_1;
    let dice_number_2 = this.state.dice_roll_2;
    let dice_number_3 = this.state.dice_roll_3;
    let dice_number_4 = this.state.dice_roll_4;
    let dice_number_5 = this.state.dice_roll_5;
    let dice_number_6 = this.state.dice_roll_6;
    const dice_number_array = [dice_number_1, dice_number_2, dice_number_3, dice_number_4, dice_number_5, dice_number_6];

    const dice_hash = [{'dice': <DiceOne />, 'num': 1 }, {'dice': <DiceTwo />, 'num': 2 }, {'dice':  <DiceThree />, 'num': 3 }, {'dice': <DiceFour />, 'num': 4 },
      {'dice': <DiceFive />, 'num': 5 }, {'dice': <DiceSix />, 'num': 6 }];

    const dice20_array = [this.state.dice_roll_20, this.state.dice_roll_21, this.state.dice_roll_22 ,this.state.dice_roll_23, this.state.dice_roll_24, this.state.dice_roll_25];
    // {display20Die(dice20_array, this.state.total_dice)};
    const display_dice_type = (this.state.dice_type) ? (displaySixDie(dice_hash, dice_number_array, this.state.total_dice)) : (display20Die(dice20_array, this.state.total_dice));
    const display_dice_total = (this.state.dice_type) ? (this.showTotal(dice_number_array)) : (this.showTotal(dice20_array));
    return(
      <View style={{backgroundColor: '#f2f2f2', height: '100%' }}>
      <ImageBackground source={require('../images/playingmat.jpg')} style={{ width: '100%', height: '100%' }}>

        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {display_dice_type}
          <FourSided />
        </View>


        {/* BUTTONS BELOW*/}
        <View style={styles.buttons_container}>

        <View style={{alignSelf: 'center', paddingBottom: 19}}>
        {display_dice_total}
        </View>
        <View style={styles.button_view}>
          <Button
            title="Roll!"
            onPress={() => this.runDiceAnimation()}
            buttonStyle={{color: 'red'}}></Button>
        </View>

          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            <View style={styles.button_small}>
              <Button
                title=" (+) Add Dice"
                onPress={() => this.addOrSubTractDice('plus')}
                buttonStyle={{color: 'red'}}></Button>
            </View>

            <View style={styles.button_small}>
              <Button
                title="(-) Remove Dice"
                onPress={() => this.addOrSubTractDice('minus')}
                buttonStyle={{color: 'red'}}></Button>
            </View>

            <View style={styles.button_small}>
              <Button
                title="Change Dice"
                onPress={() => this.changeDiceType()}
                buttonStyle={{color: 'red'}}></Button>
            </View>
          </View>

        </View>
      </ImageBackground>
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
  },
  buttons_container: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  button_view: {
    paddingBottom: 10,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  button_small: {
    paddingBottom: 10,
    width: '50%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  total_text: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 40,
    color: 'white',
  }
});


export default FrontPage;
