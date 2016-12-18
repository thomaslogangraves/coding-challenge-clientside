import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'


import createHistory from 'history/createBrowserHistory';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunkMiddleware),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

store.subscribe(() => {
  console.log("store changed", store.getState())
})

export default store
