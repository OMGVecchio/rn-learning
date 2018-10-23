/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import PicturePage from './container/picture'

export default class learning extends Component {
  state = {
    dataList: [{
      key: '图片',
      page: 'PicturePage'
    }]
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataList}
          renderItem={({ item }) => <Text onPress={() => navigate(item.page)} key={item.page}>{item.key}</Text>} />
      </View>
    );
  }
}

const App = createStackNavigator({
  Home: {
    screen: learning
  },
  PicturePage: {
    screen: PicturePage
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('learning', () => App);
