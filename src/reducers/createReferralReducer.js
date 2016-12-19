import * as types from '../actions/actionTypes';

const createReferralState = {
  isCreateReferralSent: false,
  isReferralCreated: false,
  error: false,
  createdReferral: undefined
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

export default createReferralReducer
