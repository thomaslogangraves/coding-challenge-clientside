import * as actionsReferrals from "../actions/actionsReferrals"

const initialState = {
  isLoadingReferrals: false,
  referrals: undefined,
}

export default function referrals(state=initialState, action={}) {
  switch (action.type) {
  case actionsReferrals.FETCH_REFERRALS:
    return {...state, isLoadingReferrals: true}
  case actionsReferrals.FETCH_REFERRALS_SUCCESS:
    return {...state, isLoadingReferrals: false, referrals: action.res}
  case actionsReferrals.FETCH_REFERRALS_ERROR400:
  case actionsReferrals.FETCH_REFERRALS_ERROR500:
  case actionsReferrals.FETCH_REFERRALS_FAILURE:
    return {...state, isLoadingReferrals: false}
  default:
    return state
  }
}
