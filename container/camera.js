import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
// import { RNCamera } from 'react-native-camera'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  camera: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default class PicturePage extends PureComponent {
  static navigationOptions = {
    headerTitle: '摄像头'
  }
  render() {
    return (
      <View style={styles.main}>
        {/* <RNCamera style={styles.camera}/> */}
      </View>
    )
  }
}
