import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

class DiceSix extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(

      <View style={styles.container}>

          <View style={{paddingLeft: 6}}>
            <View style={styles.dice_circle_six}></View>
            <View style={styles.dice_circle_six}></View>
            <View style={styles.dice_circle_six}></View>
          </View>

            <View style={{paddingRight: 6}}>
              <View style={styles.dice_circle_six}></View>
              <View style={styles.dice_circle_six}></View>
              <View style={styles.dice_circle_six}></View>
            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignContent: 'space-between',
  },
  dice_circle_six : {
    height: 26,
    width: 26,
    borderWidth: 4,
    borderRadius: 40,
    backgroundColor: 'black',
    marginTop: 2,
  },
});

export default DiceSix;
