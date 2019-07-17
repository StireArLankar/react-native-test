import React from 'react'
import { Dimensions } from 'react-native'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import HomeScreen from './src/home-screen'
import DetailsScreen from './src/details-screen'
import ModalScreen from './src/modal-screen'
import Drawer from './src/drawer-component'

import Ctx from './src/context'

const options = {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
}

const screens = {
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
}

const MainStack = createStackNavigator(screens, options)

const RootStack = createDrawerNavigator(
  {
    Main: {
      screen: MainStack
    },
    MyModal: {
      screen: ModalScreen
    }
  },
  {
    contentComponent: Drawer,
    drawerWidth: () => Dimensions.get('window').width,
    drawerBackgroundColor: 'rgba(255, 255, 255, 0.8)',
    drawerLockMode: 'locked-open'
  }
)

const AppContainer = createAppContainer(RootStack)

const Temp = (props) => {
  const [counter, setCounter] = React.useState(0)
  return (
    <Ctx.Provider value={{ counter, setCounter }}>
      {props.children}
    </Ctx.Provider>
  )
}

const App = () => (
  <Temp>
    <AppContainer />
  </Temp>
)

export default App
