import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

export default class InputPage extends PureComponent {
  static navigationOptions = {
    headerTitle: '原生应用API'
  }
  render() {
    return (
      <View style={styles.main}>
        <Text>native</Text>
      </View>
    )
  }
}
