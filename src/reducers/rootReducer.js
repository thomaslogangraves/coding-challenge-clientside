import * as types from '../actions/actionTypes'
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-react-router';

const initialState = {
  isLoadingReferrals: false,
  referrals: [],
  error: false
}

const reduceReferrals = (state=initialState, action=null) => {
  console.log(state, action)
  switch(action.type) {
  case types.FETCH_REFERRALS_FAILURE:
    return Object.assign({}, state, {isLoadingReferrals: false, data: action.data, error: true});
  case types.FETCH_REFFERALS_SUCCESS:
    return Object.assign({}, state, {isLoadingReferrals: false, data: action.data, error: false });
  case types.FETCH_REFERRALS:
    return Object.assign({}, state, {isLoadingReferrals: true, error: false });
  default:
    return state;
  }
}

// export const rootReducer = (state = initialState, action) => {
//   console.log(state, action)
//   switch (action.type) {
//     case types.REQUEST_REFERRALS:
//       return reduceReferrals(state, action)
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
	router: routerStateReducer,
	reduceReferrals: reduceReferrals
});

export default rootReducer
