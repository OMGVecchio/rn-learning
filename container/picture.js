import React, { PureComponent } from 'react'
import { View, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  img: {
    width: 200,
    height: 200
  }
})

export default class PicturePage extends PureComponent {
  static navigationOptions = {
    headerTitle: '图片组件'
  }
  render() {
    const source = {
      uri: 'https://rms.zhubajie.com/resource/redirect?key=mobile%2Fdefault%2F%E5%A4%B4%E5%83%8F17.jpg%2Forigine%2F1990662d-d67a-4f85-92bf-73be1dd6d334&s.w=240&s.h=240'
    }
    return (
      <View style={styles.main}>
        <Image source={source} style={styles.img} />
      </View>
    )
  }
}
