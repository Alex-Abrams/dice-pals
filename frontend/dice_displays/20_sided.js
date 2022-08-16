import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class TwentySided extends React.Component {
  constructor(props) {
    super(props);

    
  }




  render() {
    const { roll } = this.props;

    return(
      <View style={{ alignItems: 'center'}}>
        <Image source={require('../images/cropped_20_sided.png')} style={{ height: 120, width: 120}} />
        <Text style={styles.single_number}>{roll}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  single_number: {
    position: 'absolute',
    zIndex: 100,
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',

  },
})

export default TwentySided;
