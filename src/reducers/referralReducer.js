import * as types from '../actions/actionTypes';

const initialState = {
  referrals: [],
  isLoadingReferrals: false,
  error: false,
  createdReferral: undefined,
  editedReferral: undefined,
  referralToEdit: undefined,
  isOpen: false,
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
    let referralsWithNew = state.referrals.concat(action.createdReferral)
    return Object.assign({}, state, { referrals: referralsWithNew});
  case types.DELETE_REFERRAL_SUCCESS:
    let referralId = action.deletedReferralId
    let newReferrals = state.referrals.filter(referral => referral.id !== referralId)
    return Object.assign({}, state, { referrals: newReferrals});
  case types.EDIT_REFERRAL_SUCCESS:
    let { id } = action.editedReferral
    let editedReferrals = state.referrals.filter(referral => referral.id !== id).concat(action.editedReferral)
    return Object.assign({}, state, {referrals: editedReferrals})
  case types.OPEN_EDIT:
    return Object.assign({}, state, {isOpen: true, referralToEdit: action.referralToEdit})
  default:
    return state;
  }
}

export default referralReducer
