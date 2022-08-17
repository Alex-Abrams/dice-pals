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

import FrontPage from './frontend/screens/front_page';

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
    <Provider store={app_store}>
      <FrontPage />
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
