import React from 'react'
import {SafeAreaView, Text, StatusBar} from 'react-native'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const increment = (state: any = {counter: 0}) => ({
  ...state,
  counter: state.counter + 1,
})

const App = () => {
  let middleweres = [reduxThunk]
  const store = createStore(
    combineReducers({
      increment,
    }),
    composeWithDevTools(applyMiddleware(...middleweres))
  )
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text>iiii</Text>
        </SafeAreaView>
      </Provider>
    </>
  )
}

export default App
