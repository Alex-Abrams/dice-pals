import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import DiceSix from './dice_six';
import DiceFive from './dice_five';

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
            <DiceFive />
          </View>

          <View style={styles.dice_box}>
          <DiceSix />
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
