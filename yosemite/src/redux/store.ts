import {createStore, combineReducers, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const increment = (state: any = {counter: 0}) => ({
  ...state,
  counter: state.counter + 1,
})

const generateStore = () => {
  let middleweres = [reduxThunk]
  const store = createStore(
    combineReducers({
      increment,
    }),
    composeWithDevTools(applyMiddleware(...middleweres))
  )
  return store
}

export default generateStore
