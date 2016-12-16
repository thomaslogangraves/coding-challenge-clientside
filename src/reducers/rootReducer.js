import * as referralActions from "../actions/referralActions"

const initialState = {
  isLoadingReferrals: false,
  referrals: undefined,
}

const referrals = (state, action) => {
  switch (action.type) {
  case referralActions.FETCH_REFERRALS:
    return {...state, isLoadingReferrals: true}
  case referralActions.FETCH_REFERRALS_SUCCESS:
    return {...state, isLoadingReferrals: false, referrals: action.res}
  case referralActions.FETCH_REFERRALS_ERROR400:
  case referralActions.FETCH_REFERRALS_ERROR500:
  case referralActions.FETCH_REFERRALS_FAILURE:
    return {...state, isLoadingReferrals: false}
  default:
    return state
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REFERRALS:
      return referrals(state, action)
    default:
      return state
  }
}

export default rootReducer
