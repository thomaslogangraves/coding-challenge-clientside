import Immutable from 'immutable'

export default (state = Immutable.List([referral]), action) => {
  switch(action.type) {
    case 'addReferral':
      return state.push(action.referral)
    default:
      return state
  }
}
