import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, ImageBackground, Image, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import DiceSix from './dice_six';
import DiceFive from './dice_five';
import DiceFour from './dice_four';
import DiceThree from './dice_three';
import DiceTwo from './dice_two';
import DiceOne from './dice_one';
import FourSided from '../dice_displays/four_sided';
import SelectDiceModalContainer from '../dice_displays/select_dice_modal_container';
import { switchDiceType, switchDiceTotal } from '../dice_displays/switch_dice';
//////
import {rollDiceArray } from '../dice_displays/roll_functions';


class FrontPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total_dice: 2, // always start at 2 dice, lowest will be 1
      show_total: false,
      dice_array6: [3, 4, 2, 6, 4, 1],
      dice_array20: [8, 11, 19, 4, 7, 16],
      dice_array4: [2, 1, 3, 4, 2, 1],
      dice_array8: [8, 4, 2, 1, 2, 6],
      // type_of_dice: '6-sided',
    };

  }


  runDiceAnimation() {
    // this will use timer intervals to change the dice from 1-6 randomly
    // to simulate rolling the dice
    this.setState({show_total: false}); // dont show total while rolling die
    let counter = 0;
    let oneSecInterval = setInterval(() => {
      this.setState({ dice_array6: rollDiceArray(6) });
      this.setState({ dice_array20: rollDiceArray(20) });
      this.setState({ dice_array4: rollDiceArray(4) });
      counter += 1;
      if (counter === 2) {
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

  showTotal(dice_number_array) { // SEE HERE FOR TOTAL
    const display_total = (this.state.show_total) ? (
      <Text style={styles.total_text}>Total: {switchDiceTotal(dice_number_array, this.state.total_dice, this.props.dice_selection)}</Text>
      ) : (
        null
    );

    return(
      <View>
        {display_total}
      </View>
    );
  }


  createTotalsArray() {
    const total_array = [this.state.dice_array6, this.state.dice_array20, this.state.dice_array4, this.state.dice_array8];
    return total_array;
  }


  render() {
    const display_dice_total = this.showTotal(this.createTotalsArray());
    const display_modal = (this.props.is_modal_toggled) ? <SelectDiceModalContainer /> : null;

    return(
      <View style={{backgroundColor: '#f2f2f2', height: '100%' }}>
      <ImageBackground source={require('../images/playingmat.jpg')} style={{ width: '100%', height: '100%' }}>

        {display_modal}
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {switchDiceType(this.props.dice_selection, this.createTotalsArray(), this.state.total_dice)}
        </View>

        {/* BUTTONS BELOW*/}
        <View style={styles.buttons_container}>

        <View style={{alignSelf: 'center', paddingBottom: 4}}>
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
                onPress={() => this.props.modalActions.toggleModal()}
                buttonStyle={{color: 'red'}}></Button>
            </View>
          </View>

        </View>
      </ImageBackground>
    </View >
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
    bottom: 3,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    // paddingTop: 20,
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
