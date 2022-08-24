import { View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import React, { Component } from 'react';
// this will just list whats IN the modal but the actual modal needs to go in frontpage.

class SelectDiceModal extends React.Component {
  constructor(props) {
    super(props);
  }

  diceSelector(dice_type) {
    this.props.modalActions.receiveDiceSelection(dice_type);

    this.props.modalActions.toggleModal();
  }

  render() {
    return(
      <View style={styles.modal_container}>

        <View style={styles.modal_content}>
         <Pressable style={styles.pressables} onPress={() => this.diceSelector('dice-6')}>
           <Text style={styles.text}>6 - Sided</Text>
         </Pressable>

         <Pressable style={styles.pressables} onPress={() => this.diceSelector('dice-4')}>
           <Text style={styles.text}>4 - Sided</Text>
         </Pressable>

         <Pressable style={styles.pressables} onPress={() => this.diceSelector('dice-8')}>
           <Text style={styles.text}>8 - Sided</Text>
         </Pressable>

         <Pressable style={styles.pressables} onPress={() => this.diceSelector('dice-10')}>
           <Text style={styles.text}>10 - Sided</Text>
         </Pressable>

         <Pressable style={styles.pressables} onPress={() => this.diceSelector('dice-12')}>
           <Text style={styles.text}>12 - Sided</Text>
         </Pressable>

         <Pressable style={styles.pressables} onPress={() => this.diceSelector('dice-20')}>
           <Text style={styles.text}>20 - Sided</Text>
         </Pressable>
       </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal_container: {
    height: 250,
    width: 250,
    borderRadius: 20,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 180,
    zIndex: 6,
    backgroundColor: '#f2f2f2',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modal_content: {
    flex: 1,
    alignItems: 'center',
  },
  pressables: {
    marginTop: 18,
  },
  text: {
    color:'#4db8ff',
  }
})

export default SelectDiceModal;
