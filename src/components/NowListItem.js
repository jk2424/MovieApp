import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ORANGE, PINK, WHITE, GREYBG} from '../../styles';

export default class NowListItem extends Component {

  render() {
    const {title} = this.props.data;
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.wrapper}>
          <Image style={styles.img}/>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.imgshadow} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 280,
    marginRight: 20
  },
  title: {
    marginTop: 20,
    fontSize: 15
  },
  img: {
    backgroundColor: 'rgb(230, 230, 230)',
    width: 140,
    height: 210,
    borderRadius: 6,
    zIndex: 1
  },
  imgshadow: {
    top: 20,
    left: 12,
    backgroundColor: '#000',
    opacity: 0.5,
    width: 123,
    height: 185,
    zIndex: 0,
    position: 'absolute',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 9
  }
});
