import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class TwelveSided extends React.Component {
  constructor(props) {
    super(props);


  }




  render() {
    const { roll } = this.props;

    return(
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../images/12_sided.png')} style={{ height: 120, width: 120}} />
        <Text style={styles.single_number}>{roll}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  single_number: {
    position: 'absolute',
    zIndex: 3,
    marginTop: 52,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
})

export default TwelveSided;
