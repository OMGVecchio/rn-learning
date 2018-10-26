import React, { PureComponent } from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  // AccessibilityInfo,
  // ActionSheetIOS,
  Alert,
  // AlertIOS,
  // Animated,
  // AppRegistry,
  AppState,
  AsyncStorage,
  // BackAndroid,
  BackHandler,
  // CameraRoll, // 需链接原生 RCTCameraRoll 库，且无相册界面
  // Clipboard,
  // DatePickerAndroid,
  Dimensions,
  // Easing,
  // Geolocation, // 全局 navigator.geolocation 引用, 无需 import
  // ImageEditor,
  // ImagePickerIOS,
  // ImageStore,
  // InteractionManager,
  Keyboard,
  // LayoutAnimation,
  // Linking,
  // NetInfo,
  // PanResponder,
  // PermissionsAndroid,
  // PixelRatio,
  // PushNotificationIOS,
  // Settings,
  // Share,
  // Systrace,
  // TimePickerAndroid,
  // ToastAndroid,
  Vibration
} from 'react-native'

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
})

export default class InputPage extends PureComponent {
  static navigationOptions = {
    headerTitle: '输入框'
  }
  state = {
    storageCount: 0,
    appStateCount: 0,
    canGoBack: false
  }
  componentWillMount = async () => {
    const rawCount = await AsyncStorage.getItem('@api-count')
    let count = +rawCount
    if (isNaN(count)) {
      count = 0
    }
    this.setState({ storageCount: count})
  }
  componentDidMount = () => {
    AppState.addEventListener('change', this.handleAppStateChange)
    BackHandler.addEventListener('hardwareBackPress', this.handleAppBack)
    this.keyboardShow = Keyboard.addListener('keyboardDidShow', () => Alert.alert('键盘展示出来', '可以了'))
    this.keyboardHide = Keyboard.addListener('keyboardDidHide', () => Alert.alert('键盘被隐藏', '关掉吧'))
  }
  componentWillUnmount = () => {
    AppState.removeEventListener('change', this.handleAppStateChange)
    BackHandler.removeEventListener('hardwareBackPress', this.handleAppBack)
    this.keyboardShow.remove()
    this.keyboardHide.remove()
  }
  storageUpdate = async () => {
    const newCount = this.state.storageCount + 1
    // setItem 的 value 为 string，用 int 报错，因为 Java 等强类型的缘故 ？
    await AsyncStorage.setItem('@api-count', newCount + '')
    this.setState({ storageCount: newCount })
  }
  handleAppStateChange = (nextState) => {
    if (nextState === 'active') {
      this.setState({
        appStateCount: this.state.appStateCount + 1
      })
    }
  }
  handleAppBack = () => {
    if (!this.state.canGoBack) {
      this.setState({ canGoBack: true })
      Alert.alert('给你个提示吧', '原生返回需要点两次才生效')
      return true
    }
    return false
  }
  getScreenInfo = () => {
    const info = Dimensions.get('window')
    Alert.alert('屏幕信息', JSON.stringify(info, null, 4))
  }
  getLocationInfo = () => {
    navigator.geolocation.getCurrentPosition(data => {
      Alert.alert('当前位置信息', JSON.stringify(data, null, 4))
    })
  }
  vibrate = () => {
    Vibration.vibrate(400, false)
  }
  render() {
    return (
      <ScrollView style={styles.main}>
        <Text onPress={this.storageUpdate}>【AsyncStorage】点击更新持久数据 count => count：{this.state.storageCount}</Text>
        <Text>【AppState】在后台去的次数：{this.state.appStateCount}</Text>
        <Text onPress={this.getScreenInfo}>【Dimensions】获取屏幕信息</Text>
        <Text onPress={this.getLocationInfo}>【Geolocation】获取地理位置信息</Text>
        <TextInput placeholder="【Keyboard】测试键盘事件" />
        <Text onPress={this.vibrate}>【Vibration】震动</Text>
      </ScrollView>
    )
  }
}
