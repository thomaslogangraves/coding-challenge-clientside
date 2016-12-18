import * as types from '../actions/actionTypes'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import _ from 'lodash'


const initialState = {
  referrals: [],
  isLoadingReferrals: false,
  error: false,
  createdReferral: undefined,
  editedReferral: undefined,
  referralToEdit: undefined,
  isOpen: false,
}

const createReferralState = {
  isCreateReferralSent: false,
  isReferralCreated: false,
  error: false,
  createdReferral: undefined
}

const deleteReferralState = {
  isDeleteReferralSent: false,
  isReferralDeleted: false,
  error: false,
  deletedReferralId: undefined
}

const editReferralState = {
  isEditReferralSent: false,
  isReferralEdited: false,
  error: false,
  editedReferral: undefined
}

const referralReducer = (state=initialState, action = null) => {
  switch(action.type) {
  case types.FETCH_REFERRALS:
    return Object.assign({}, state, { isLoadingReferrals: true, error: false });
  case types.FETCH_REFERRALS_FAILURE:
    return Object.assign({}, state, { isLoadingReferrals: false, error: true });
  case types.FETCH_REFERRALS_SUCCESS:
    return Object.assign({}, state, { isLoadingReferrals: false, referrals: action.referrals, error: false });
  case types.CREATE_REFERRAL_SUCCESS:
    let referralsWithNew = state.referrals.push(action.createdReferral)
    return Object.assign({}, state, { referrals: state.referrals});
  case types.DELETE_REFERRAL_SUCCESS:
    let referralId = action.deletedReferralId
    let newReferrals = state.referrals.filter(referral => referral.id !== referralId)
    return Object.assign({}, state, { referrals: newReferrals});
  case types.EDIT_REFERRAL_SUCCESS:
    return Object.assign({}, state, {referrals: editedReferrals})
  case types.OPEN_EDIT:
    return Object.assign({}, state, {isOpen: true, referralToEdit: action.referralToEdit})
  default:
    return state;
  }
}

const createReferralReducer = (state=createReferralState, action) => {
  switch(action.type) {
    case types.REQ_CREATE_REFERRAL:
      return Object.assign({}, state, { isCreateReferralSent: true, error: false });
    case types.CREATE_REFERRAL_SUCCESS:
      return Object.assign({}, state, { isCreateReferralSent: true, error: false, createdReferral: action.createdReferral, isReferralCreated: true});
    case types.CREATE_REFERRAL_FAILURE:
      return Object.assign({}, state, { isCreateReferralSent: false, error: true, isReferralCreated: false});
    default:
      return state;
  }
}

const editReferralReducer = (state=editReferralState, action) => {
  switch(action.type) {
    case types.REQ_CREATE_REFERRAL:
      return Object.assign({}, state, { isEditReferralSent: true, error: false });
    case types.CREATE_REFERRAL_SUCCESS:
      return Object.assign({}, state, { isEditReferralSent: true, error: false, editedReferral: action.editedReferral, isReferralEdited: true});
    case types.CREATE_REFERRAL_FAILURE:
      return Object.assign({}, state, { isEditReferralSent: false, error: true, isReferralEdited: false});
    default:
      return state;
  }
}

const deleteReferralReducer = (state=deleteReferralState, action) => {
  switch(action.type) {
    case types.REQ_DELETE_REFERRAL:
      return Object.assign({}, state, { isDeleteReferralSent: true, error: false });
    case types.DELETE_REFERRAL_SUCCESS:
      return Object.assign({}, state, { isDeleteReferralSent: true, error: false, deletedReferralId: action.deletedReferralId, isReferralDeleted: true});
    case types.DELETE_REFERRAL_FAILURE:
      return Object.assign({}, state, { isDeleteReferralSent: false, error: true, isReferralDeleted: false});
    case types.HANDLE_DELETE_REFERRAL:
      return Object.assign({}, state, { deletedReferral: action.referralToBeDeleted});
    default:
      return state;
  }
}

const rootReducer = combineReducers({
	routing: routerReducer,
	referrals: referralReducer,
  createdReferral: createReferralReducer,
  deletedReferral: deleteReferralReducer
});

export default rootReducer
