import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class TwentySided extends React.Component {
  constructor(props) {
    super(props);
  }

  rollOneThro20(max) {
    return Math.floor(Math.random() * max); // roll a number between 1-6 randomly
  }


  render() {
    const rolled = this.rollOneThro20(20);
    const display_number = (rolled > 9) ? (
        <Text style={styles.double_number}>{rolled}</Text>
    ) : (
        <Text style={styles.single_number}>{rolled}</Text>
    );

    return(
      <View>
        <Image source={require('../../images/cropped_20_sided.png')} style={{ height: 120, width: 120}} />
        {display_number}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  single_number: {
    position: 'absolute',
    zIndex: 100,
    left: '45%',
    top: '40%',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    // alignItems: 'center',
  },
  double_number : {
    position: 'absolute',
    zIndex: 100,
    left: '38%',
    top: '40%',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
  },
})

export default TwentySided;
