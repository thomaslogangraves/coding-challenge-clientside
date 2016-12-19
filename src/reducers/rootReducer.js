import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import deleteReferralReducer from './deleteReferralReducer';
import editReferralReducer from './editReferralReducer';
import createReferralReducer from './createReferralReducer';
import referralReducer from './referralReducer'

const rootReducer = combineReducers({
	routing: routerReducer,
	referrals: referralReducer,
  createdReferral: createReferralReducer,
  deletedReferral: deleteReferralReducer,
  editedReferral: editReferralReducer
});

export default rootReducer
