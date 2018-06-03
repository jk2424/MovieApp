/**
 * Sample React Native App
 */

import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';

import Welcome from './src/screens/Welcome';
import MovieList from './src/screens/MovieList';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

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
