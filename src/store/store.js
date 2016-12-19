import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

import createHistory from 'history/createBrowserHistory';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunkMiddleware),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

export default store
