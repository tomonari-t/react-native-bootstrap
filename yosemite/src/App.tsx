import React from 'react'
import {SafeAreaView, Text, StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import Root from './router'

const App = () => {
  const store = generateStore()
  return (
    <>
      <Provider store={store}>
        <Root />
      </Provider>
    </>
  )
}

export default App
