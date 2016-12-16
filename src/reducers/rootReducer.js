import * as types from '../actions/actionTypes'

const initialState = {
  isLoadingReferrals: false,
  referrals: undefined,
}

const reduceReferrals = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {referrals: action})
}

export const rootReducer = (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case types.FETCH_REFERRALS:
      return reduceReferrals(state, action)
    default:
      return state
  }
}

export default rootReducer
