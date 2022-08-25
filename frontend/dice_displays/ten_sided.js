import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class TenSided extends React.Component {
  constructor(props) {
    super(props);


  }




  render() {
    const { roll } = this.props;

    return(
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../images/10_sided.png')} style={{ height: 120, width: 120}} />
        <Text style={styles.single_number}>{roll}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  single_number: {
    position: 'absolute',
    zIndex: 3,
    marginTop: 30,
    right: 55,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
})

export default TenSided;
