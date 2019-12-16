import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import A from '../components/a'
import B from '../components/b'

const AppNavigator = createStackNavigator(
  {
    A: {
      screen: A,
    },
    B: {
      screen: B,
    },
  },
  {
    initialRouteName: 'A',
  }
)

export default createAppContainer(AppNavigator)
