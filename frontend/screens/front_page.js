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
      dice_roll_4: 0,
      dice_roll_5: 0,
      dice_roll_6: 0,
      total_dice: 0,
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
      this.setState({ dice_roll_4: this.rollOneThroSix(6)});
      this.setState({ dice_roll_5: this.rollOneThroSix(6)});
      this.setState({ dice_roll_6: this.rollOneThroSix(6)});

      counter += 1;
      if (counter === 20) {
        clearInterval(oneSecInterval);
      };
    }, 100); // set interval timing here
  }

  displayDie(die, dice_number) {

    
    return(
      <View>
        {die.map((dice, i) =>
          <View style={styles.dice_box}>
            {die[dice_number_1].dice}
          </View>
        )}
      </View>
    );
  }




  render() {
    let dice_number_1 = this.state.dice_roll_1;
    let dice_number_2 = this.state.dice_roll_2;
    let dice_number_3 = this.state.dice_roll_3;
    const dice_array = [<DiceOne />, <DiceTwo />, <DiceThree />, <DiceFour />, <DiceFive />, <DiceSix />];

    const dice_hash = [{'dice': <DiceOne />, 'num': 1 }, {'dice': <DiceTwo />, 'num': 2 }, {'dice':  <DiceThree />, 'num': 3 }, {'dice': <DiceFour />, 'num': 4 },
      {'dice': <DiceFive />, 'num': 5 }, {'dice': <DiceSix />, 'num': 6 }];

    return(
      <View style={{backgroundColor: 'yellow', height: '100%' }}>
        <View>

        <View style={styles.dice_container}>

            <View style={styles.dice_box}>
              {dice_hash[dice_number_1].dice}
            </View>

            <View style={styles.dice_box}>
              {dice_hash[dice_number_2].dice}
            </View>
        </View>

        <View>
        <Text>{ dice_hash[dice_number_1].num + dice_hash[dice_number_2].num }</Text>
        </View>


        </View>

        <View style={styles.buttons_container}>
          <View style={styles.button_view}>
          <Button
          title="Roll!"
          onPress={() => this.runDiceAnimation()}
          buttonStyle={{color: 'red'}}></Button>
          </View>

          <View style={styles.button_view}>
          <Button
          title="Add Dice"
          onPress={() => this.runDiceAnimation()}
          buttonStyle={{color: 'red'}}></Button>
          </View>

          <View style={styles.button_view}>
          <Button
          title="Remove Dice"
          onPress={() => this.runDiceAnimation()}
          buttonStyle={{color: 'red'}}></Button>
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
    flexWrap: 'wrap',
    paddingTop: 20,
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
  buttons_container: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  button_view: {
    // position: 'absolute',
    // bottom: 40,
    paddingBottom: 10,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
});


export default FrontPage;
