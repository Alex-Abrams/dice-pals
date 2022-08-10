import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, ImageBackground, Image } from 'react-native';
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
      total_dice: 2, // always start at 2 dice, lowest will be 1
      show_total: false,
    };

  }


  rollOneThroSix(max) {
    return Math.floor(Math.random() * max); // roll a number between 1-6 randomly
  }

  componentDidMount() { // have the dice randomly rolled when the screen is loaded.
    this.setState({ dice_roll_1: this.rollOneThroSix(6)});
    this.setState({ dice_roll_2: this.rollOneThroSix(6)});
    this.setState({ dice_roll_3: this.rollOneThroSix(6)});
  }

  runDiceAnimation() {
    // this will use timer intervals to change the dice from 1-6 randomly
    // to simulate rolling the dice
    this.setState({show_total: false}); // dont show total while rolling die
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
        this.setState({show_total: true}); // once counter hits 20 show the total
      };
    }, 100); // set interval timing here
  }

  displayDie(die, dice_number_array, total_dice) {
    // so die ie dice_hash needs to be full available
    const the_dice = dice_number_array.slice(0, total_dice);
    // this will map out the total amount of dice depending how mmuch the user has hit the 'add dice button'
    return(
      <View style={styles.dice_container}>
        {the_dice.map((dice, i) =>
          <View style={styles.dice_box} key={i}>
            {die[dice_number_array[i]].dice}
          </View>
        )}
        <Image source={require('../images/cropped_20_sided.png')} style={{ height: 120, width: 120}} />
      </View>
    );

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

  sumOfDice(dice_array, total_dice) {
    const chosen_dice = dice_array.slice(0, total_dice); // slice the dice array to only sum up total amount of dice on the screen

    let sum = 0;
    chosen_dice.forEach(dice => {
      sum += dice + 1; // the dice numbers are in array sequence, so 1 would be 0, adding 1 to each dice roll solves this
    });

    return sum;
  }

  showTotal(dice_number_array) {
    const display_total = (this.state.show_total) ? (
      <Text style={styles.total_text}>Total: {this.sumOfDice(dice_number_array, this.state.total_dice)}</Text>
      ) : (
        null
    );

    return(
      <View>
        {display_total}
      </View>
    );
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


    return(
      <View style={{backgroundColor: '#f2f2f2', height: '100%' }}>
      <ImageBackground source={require('../images/playingmat.jpg')} style={{ width: '100%', height: '100%' }}>


        <View>
          {this.displayDie(dice_hash, dice_number_array, this.state.total_dice)}

        </View>



        <View style={styles.buttons_container}>

        <View style={{alignSelf: 'center', paddingBottom: 19}}>
        {this.showTotal(dice_number_array)}
        </View>
          <View style={styles.button_view}>
          <Button
          title="Roll!"
          onPress={() => this.runDiceAnimation()}
          buttonStyle={{color: 'red'}}></Button>
          </View>

          <View style={styles.button_view}>
          <Button
          title=" (+) Add Dice"
          onPress={() => this.addOrSubTractDice('plus')}
          buttonStyle={{color: 'red'}}></Button>
          </View>

          <View style={styles.button_view}>
          <Button
          title="(-) Remove Dice"
          onPress={() => this.addOrSubTractDice('minus')}
          buttonStyle={{color: 'red'}}></Button>
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
  total_text: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 40,


    color: 'white',
  }
});


export default FrontPage;
