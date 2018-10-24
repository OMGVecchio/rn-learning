import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
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
    headerTitle: '触摸事件'
  }
  render() {
    return (
      <View style={styles.main}>
        <Button
          onPress={() => alert('按了原始按钮')}
          title="原始按钮" />
        {/* Touchable 系列组件 */}
        <TouchableHighlight onLongPress={() => alert('长按了TouchableHighlight')} underlayColor="white">
          {/* 按下时变暗 */}
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>
        <TouchableNativeFeedback onLongPress={() => alert('长按了TouchableNativeFeedback')}>
          {/* Android 上，按下时形成类似墨水涟漪的视觉效果 */}
          <Text>TouchableNativeFeedback</Text>
        </TouchableNativeFeedback>
        <TouchableOpacity onLongPress={() => alert('长按了TouchableOpacity')}>
          {/* 按下时降低透明度 */}
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback onLongPress={() => alert('长按了TouchableWithoutFeedback')}>
          {/* 按下时无任何视觉反馈，chilldren 需要为 view */}
          <View>
            <Text>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
