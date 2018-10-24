import React, { PureComponent } from 'react'
import {
  StyleSheet,
  FlatList,
  Text
} from 'react-native'

const styles = StyleSheet.create({
  list: {
    // 父组件若不设置 flex 为 1，则不会填充整个页面；子组件设置 flex，则可以等比获取父组件剩余可用的空间
    flex: 1
  },
  listItem: {
    textAlign: 'center',
    height: 40
  }
})

export default class IndexPage extends PureComponent {
  static navigationOptions = {
    headerTitle: '首页'
  }
  state = {
    dataList: [{
      key: '图片',
      page: 'PicturePage'
    }, {
      key: '输入框',
      page: 'InputPage'
    }, {
      key: '触摸',
      page: 'TouchPage'
    }, {
      key: 'Fetch',
      page: 'FetchPage'
    }, {
      key: 'native',
      page: 'NativePage'
    }]
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <FlatList
        style={styles.list}
        data={this.state.dataList}
        renderItem={({ item }) => <Text onPress={() => navigate(item.page)} style={styles.listItem} key={item.page}>{item.key}</Text>} />
    )
  }
}
