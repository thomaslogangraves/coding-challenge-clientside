import * as referralActions from "../actions/referralActions"

const initialState = {
  isLoadingReferrals: false,
  referrals: undefined,
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
