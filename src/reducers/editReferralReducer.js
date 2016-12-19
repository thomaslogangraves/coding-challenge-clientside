import * as types from '../actions/actionTypes';

const editReferralState = {
  isEditReferralSent: false,
  isReferralEdited: false,
  error: false,
  editedReferral: undefined
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

export default editReferralReducer
