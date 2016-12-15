
const initialState = {
  makeReferralsRequest('https://referly-api.herokuapp.com/')
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'addReferral':
      return state.push(action.referral)
    default:
      return state
  }
}
