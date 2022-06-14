import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }



  render() {
    return(
      <View style={{ backgroundColor: 'purple' }}>
        <View style={styles.dice_container}>
          <View style={styles.dice_box}>
            <View style={styles.dice_circle_six}></View>
            <View style={styles.dice_circle_six}></View>
            <View style={styles.dice_circle_six}></View>
          </View>

          <View style={styles.dice_box}>
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
    flexDirection: 'row',
  },
  dice_circle_six : {
    height: 26,
    width: 26,
    borderWidth: 4,
    borderRadius: 40,
    backgroundColor: 'black',
    marginLeft: 5,
    marginTop: 2,
  },
});


export default FrontPage;
