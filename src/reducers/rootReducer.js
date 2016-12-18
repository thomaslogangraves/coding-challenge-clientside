import * as types from '../actions/actionTypes'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const initialState = {
  referrals: [],
  isLoadingReferrals: false,
  error: false,
}

const createReferralState = {
  referralSent: false,
  referralCreated: false,
  error: false
}

const referralReducer = (state=initialState, action = null) => {
  switch(action.type) {
  case types.FETCH_REFERRALS:
    return Object.assign({}, state, { isLoadingReferrals: true, error: false });
  case types.FETCH_REFERRALS_FAILURE:
    return Object.assign({}, state, { isLoadingReferrals: false, error: true });
  case types.FETCH_REFERRALS_SUCCESS:
    return Object.assign({}, state, { isLoadingReferrals: false, referrals: action.referrals, error: false });
  default:
    return state;
  }
}

const createReferralReducer = (state=createReferralState, action) => {
  switch(action.type) {
    case types.REQ_CREATE_REFERRAL:
      return Object.assign({}, state, { referralSent: true, error: false });
    case types.CREATE_REFERRAL_SUCCESS:
      return Object.assign({}, state, { referralSent: true, error: false, referralCreated: true});
    case types.CREATE_REFERRAL_FAILURE:
      return Object.assign({}, state, { referralSent: true, error: true, referralCreated: false});
    default:
      return state;
  }
}

const rootReducer = combineReducers({
	routing: routerReducer,
	referrals: referralReducer,
  createReferral: createReferralReducer
});

export default rootReducer
