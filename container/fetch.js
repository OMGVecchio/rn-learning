import React, { PureComponent } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native'

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
})

export default class InputPage extends PureComponent {
  static navigationOptions = {
    headerTitle: 'Fetch获取网络请求'
  }
  state = {
    json: ''
  }
  componentDidMount() {
    fetch('https://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=react&bk_length=600', {
      method: 'GET',
      mode: 'cors'
    }).then(rawData => {
      return rawData.json()
    }).then(data => {
      this.setState({
        json: JSON.stringify(data, null, 4)
      })
    })
  }
  render() {
    return (
      <ScrollView style={styles.main}>
        <Text>{this.state.json}</Text>
      </ScrollView>
    )
  }
}
