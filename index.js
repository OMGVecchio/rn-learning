import { AppRegistry } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import IndexPage from './container/index.js'
import PicturePage from './container/picture.js'
import InputPage from './container/input'
import TouchPage from './container/touch'
import FetchPage from './container/fetch'
import NativePage from './container/native'

const App = createStackNavigator({
  IndexPage: {
    screen: IndexPage
  },
  PicturePage: {
    screen: PicturePage
  },
  InputPage: {
    screen: InputPage
  },
  TouchPage: {
    screen: TouchPage
  },
  FetchPage: {
    screen: FetchPage
  },
  NativePage: {
    screen: NativePage
  }
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }
})

AppRegistry.registerComponent('learning', () => App)
