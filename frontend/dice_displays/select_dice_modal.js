import { View, Text, StyleSheet, FlatList, Keyboard, StatusBar, ScrollView, Modal} from 'react-native';
import React, { Component } from 'react';
// this will just list whats IN the modal but the actual modal needs to go in frontpage.

class SelectDiceModal extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <View style={{height: 250, width: 250, borderRadius: 20,
           position: 'absolute', alignSelf: 'center', marginTop: 200, zIndex: 5, backgroundColor: 'white',
           shadowColor: "#000",
           shadowOffset: { width: 0, height: 2 },
           shadowOpacity: 0.25,
           shadowRadius: 4,
           elevation: 5
         }}>
         <Pressable onPress={() => console.log('presdaaaad!')}>
           <Text>Thing </Text>
         </Pressable>
         <Pressable onPress={() => console.log('presddddddsed!')}>
           <Text>Thing </Text>
         </Pressable>
         <Pressable onPress={() => console.log('pre54534543ssed!')}>
           <Text>Thing </Text>
         </Pressable>
         <Pressable onPress={() => console.log('pres;;;;;sed!')}>
           <Text>Thing </Text>
         </Pressable>
         <Pressable onPress={() => console.log('pres/////sed!')}>
           <Text>Thing </Text>
         </Pressable>
         <Pressable onPress={() => console.log('pressed!')}>
           <Text>Thing </Text>
         </Pressable>
      </View>
    );
  }
}

export default SelectDiceModal;
