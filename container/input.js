import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInput: {
    width: 200
  }
})

export default class InputPage extends PureComponent {
  static navigationOptions = {
    headerTitle: '输入框'
  }
  state = {
    text: ''
  }
  render() {
    return (
      <View style={styles.main}>
        <TextInput placeholder="说点啥" style={styles.textInput} onChangeText={text => this.setState({ text })}/>
        <Text>{this.state.text || '没说的么'}</Text>
      </View>
    )
  }
}
