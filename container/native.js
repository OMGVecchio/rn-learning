import React, { PureComponent } from 'react'
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  // Button,
  // DatePickerIOS,
  // DrawerLayoutAndroid,
  // FlatList,
  // Image,
  // KeyboardAvoidingView,
  // MaskedViewIOS,
  Modal,
  // NavigatorIOS,
  Picker,
  // PickerIOS,
  // ProgressBarAndroid,
  // ProgressViewIOS,
  // RefreshControl,
  // ScrollView,
  // SectionList,
  // SegmentedControlIOS,
  Slider,
  // SnapshotViewIOS,
  StatusBar,
  Switch,
  // TabBarIOS,
  // TabBarIOSItem,
  // Text,
  // TextInput,
  // ToolbarAndroid,
  // TouchableHighlight,
  // TouchableNativeFeedback,
  // TouchableOpacity,
  // TouchableWithoutFeedback,
  // View,
  ViewPagerAndroid,
  // VirtualizedList,
  WebView,
} from 'react-native'

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  common: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: 'skyblue',
    borderBottomWidth: 2
  },
  picker: {
    height: 50,
    width: 400
  },
  slider: {
    width: 150
  },
  viewPagerAndroid: {
    height: 50
  },
  webView: {
    height: 200
  }
})

export default class InputPage extends PureComponent {
  static navigationOptions = {
    headerTitle: '原生应用组件'
  }
  state = {
    modalVisibility: false,
    picker: '',
    sliderVal: 0,
    statusBarVisibility: true
  }
  render() {
    return (
      <ScrollView style={styles.main}>
        <View style={styles.common}>
          <Text onPress={() => this.setState({ modalVisibility: true })}>打开【Modal】</Text>
          <Modal visible={this.state.modalVisibility} onRequestClose={() => {}}>
            <Text>Hello, world</Text>
            <Text onPress={() => this.setState({ modalVisibility: false })}>点击关闭</Text>
          </Modal>
        </View>
        <View style={styles.common}>
          <Picker style={styles.picker} selectedValue={this.state.picker} onValueChange={val => this.setState({ picker: val })}>
            <Picker.Item label="nba" value="1" />
            <Picker.Item label="cba" value="2" />
          </Picker>
        </View>
        <View style={styles.common}>
          <Text>【Slider】{this.state.sliderVal}</Text>
          <Slider style={styles.slider} maximumValue={100} minimumValue={0} step={5} onValueChange={val => this.setState({ sliderVal: val })} />
        </View>
        <View style={styles.common}>
          <Text>【StatusBar】{this.state.statusBarVisibility ? '显示' : '隐藏' }</Text>
          <Switch value={this.state.statusBarVisibility} onValueChange={val => this.setState({ statusBarVisibility: val })} />
          <StatusBar hidden={!this.state.statusBarVisibility}/>
        </View>
        <ViewPagerAndroid style={styles.viewPagerAndroid}>
          <View>
            <Text>【ViewPagerAndroid】1</Text>
          </View>
          <View>
            <Text>【ViewPagerAndroid】2</Text>
          </View>
        </ViewPagerAndroid>
        <WebView source={{ uri: 'https://m.zbj.com' }} style={styles.webView}/>
      </ScrollView>
    )
  }
}
