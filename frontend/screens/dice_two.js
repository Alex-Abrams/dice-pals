import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

class DiceTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>

        <View style={styles.top_dots}>
          <View style={styles.dice_circle_two}></View>
        </View>

        <View style={{alignItems: 'center'}}>{/* middle dot */}
          <View style={styles.dice_circle_middle}></View>
        </View>

        <View style={styles.bottom_dots}>
          <View style={styles.dice_circle_two}></View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 2,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  top_dots: {
    flexDirection: 'row',
  },
  bottom_dots: {
    flexDirection: 'row-reverse',
  },
  dice_circle_two : {
    height: 26,
    width: 26,
    borderWidth: 4,
    borderRadius: 40,
    backgroundColor: 'black',
    marginTop: 2,
  },
  dice_circle_middle: {
    height: 26,
    width: 26,
    borderWidth: 4,
    borderRadius: 40,
    borderColor: 'purple',
    backgroundColor: 'purple',
    marginTop: 2,
  }
});


export default DiceTwo;
