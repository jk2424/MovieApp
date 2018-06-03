/**
 * Sample React Native App
 */

import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';

import Welcome from './src/screens/Welcome';
import MovieList from './src/screens/MovieList';

const RootStack = createStackNavigator({
  welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },
  movielist: {
    screen: MovieList,
    navigationOptions: {
      header: null
    }
  }
})

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
