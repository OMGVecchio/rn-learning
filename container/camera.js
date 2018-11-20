import React, { PureComponent } from 'react'
import { View, Image, Text, Button, StyleSheet, Modal } from 'react-native'
import { RNCamera } from 'react-native-camera'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  btnGroup: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default class CameraPage extends PureComponent {
  static navigationOptions = {
    headerTitle: '摄像头'
  }
  state = {
    modalVisibility: false,
    pictureUri: ''
  }
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: .5, base64: true }
      const picture = this.camera.takePictureAsync(options)
      this.setState({ pictureUri: picture.uri })
    }
  }
  render() {
    const { modalVisibility, pictureUri } = this.state
    return (
      <View style={styles.main}>
        <RNCamera
          ref={ref => this.camera = ref}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'FBI Warning'}
          permissionDialogMessage={'老兄给个摄像权限?'}
          onGoogleVisionBarcodesDetected={({ barCodes }) => {
            // alert(barCodes);
          }} />
        <Modal visible={modalVisibility} onRequestClose={() => {}}>
          {pictureUri ? <Image source={{ uri: pictureUri }} /> : <Text>哥，还没照了</Text> }
          <Text onPress={() => this.setState({ modalVisibility: false })}>点击关闭</Text>
        </Modal>
        <View style={styles.btnGroup}>
          <Button onPress={this.takePicture} title="拍照" />
          <Button onPress={() => this.setState({ modalVisibility: true })} title="预览" />
        </View>
      </View>
    )
  }
}
