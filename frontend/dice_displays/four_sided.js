import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class FourSided extends React.Component {
  constructor(props) {
    super(props);


  }


  render() {
    const { roll } = this.props;

    return(
      <View style={{ alignItems: 'center'}}>
        <Image source={require('../images/4_sided_die.png')} style={{ height: 145, width: 145}} />
        <Text style={styles.single_number}>4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  single_number: {
    position: 'absolute',
    zIndex: 100,
    marginTop: 40,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 20,
    paddingRight: 3,
  },
})

export default FourSided;
