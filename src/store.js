import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

import { routerStateReducer, reduxReactRouter } from 'redux-react-router';

import createHistory from 'history/lib/createBrowserHistory';

// const store = createStore(rootReducer, compose(
//   applyMiddleware(thunkMiddleware),
//   typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
// ))
//
// export default store

const createAppStore = compose(
	applyMiddleware(thunkMiddleware),
	reduxReactRouter({createHistory}),
)(createStore);

export default function configureStore(initialState){
	const store = createAppStore(rootReducer, initialState);

	return store;
};
