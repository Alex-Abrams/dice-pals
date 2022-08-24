import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class EightSided extends React.Component {
  constructor(props) {
    super(props);


  }


  render() {
    const { roll } = this.props;

    return(
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../images/8_sided_die.png')} style={{ height: 125, width: 125}} />
        <Text style={styles.single_number}>{roll}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  single_number: {
    position: 'absolute',
    zIndex: 3,
    marginTop: 34,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    // paddingTop: 20,
    // paddingRight: 3,
  },
})

export default EightSided;
