import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  ScrollView
} from 'react-native';

import {ORANGE, PINK, WHITE, GREYBG} from '../../styles';

import UpcomingListItem from '../components/UpcomingListItem';
import NowListItem from '../components/NowListItem';

export default class MovieList extends Component {
  state = {
    upcoming: [
      {id:0, title: 'Test 1'},
      {id:1, title: 'Test 2'},
      {id:2, title: 'Test 3'},
      {id:3, title: 'Test 4'},
      {id:4, title: 'Test 5'}
    ],
    nowplaying: [
      {id:0, title: 'Test 1'},
      {id:1, title: 'Test 2'},
      {id:2, title: 'Test 3'},
      {id:3, title: 'Test 4'},
      {id:4, title: 'Test 5'}
    ]
  }

  keyExtractor = item => `${item.id}`;

  renderUpcoming = ({item}) => (
    <UpcomingListItem data={item} />
  );

  renderNowPlaying = ({item}) => (
    <NowListItem data={item} />
  )

  render() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MOVIES</Text>
      <FlatList
        data={this.state.upcoming}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderUpcoming}
        horizontal
      />
      <View style={styles.listcontainer}>
        <Text>NOW</Text>
        <FlatList
          data={this.state.nowplaying}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderNowPlaying}
          horizontal
        />
      </View>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREYBG,
    paddingLeft: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 80
  }
});
