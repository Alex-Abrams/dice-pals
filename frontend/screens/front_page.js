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
    };

  }


  // countDown() {
  //   setTimeout(() => {this.setState({count: this.state.count + 1})}, 2000);
  // }

  runDiceAnimation() {
    // this will use timer intervals to change the dice from 1-6 randomly
    // to simulate rolling the dice
    let counter = 0;
    let oneSecInterval = setInterval(() => {this.setState({count: this.state.count + 1})}, 1000);
    // console.log("COUNTER", counter);
    if (this.state.count === 5) {clearInterval(oneSecInterval)};


  }

  // componentWillUnmount(){
  //   if (this.state.count === 5) {clearInterval(this.runDiceAnimation())}
  // }

  renderDice() {
    let display_dice = (this.state.count > 0) ? (
      <DiceSix />
    ) : (
      <DiceThree />
    );

    return(
      <View style={styles.dice_box}>
        {display_dice}
      </View>
    );
  };


  render() {
    console.log('STATE', this.state);
    return(
      <View style={{backgroundColor: 'yellow', height: '100%' }}>
        <View>

        <View style={styles.dice_container}>

            <View style={styles.dice_box}>
              <DiceOne />
            </View>

            <View style={styles.dice_box}>
              <DiceTwo />
            </View>

            <View style={styles.dice_box}>
              <DiceTwo />
            </View>

            {this.renderDice()}

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
