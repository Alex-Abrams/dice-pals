import React, { Component } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import logger from 'redux-logger';
import rootReducer from './frontend/reducers/root_reducer';

let store = null;

function configureStore(initialState = {}) {
  if (store) {
    return store;
  }
  const middlewares = [thunk, logger];

  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  return store;
}

let app_store = configureStore();



const App: () => Node = () => {

  return (
    <SafeAreaView>
      <Text>Dice rolling app</Text>
      <Text>Should click to roll dice</Text>
      <Text>Animate a Dice Rolling feature</Text>
      <Text>Like 6 seconds of a dice switching to every number</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
