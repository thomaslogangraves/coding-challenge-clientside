import * as types from '../actions/actionTypes';

const deleteReferralState = {
  isDeleteReferralSent: false,
  isReferralDeleted: false,
  error: false,
  deletedReferralId: undefined
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

export default deleteReferralReducer
