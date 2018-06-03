/**
 * Movie App Step-by-step
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {ORANGE, PINK, WHITE} from './styles'



export default class App extends Component<Props> {
  render() {
    return (
      <LinearGradient colors={[ORANGE, PINK]} style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.welcome}>
          MOVIE APP
        </Text>
        </View>
        <Text style={styles.footer}>Copyright 2018</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    color: WHITE,
    textAlign: 'center',
    margin: 10,
  },

  footer:{
    fontSize: 20,
    color: WHITE,
    textAlign: 'center',
    margin: 10,
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  wrapper:{
    flex:1,
    justifyContent: 'center'
  }

});
