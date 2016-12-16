import axios from 'axios'
import { FETCH_REFERRALS, ADD_REFERRALS } from './actions'

export function addReferrals() {
  return { type: ADD_REFERRALS }
}


export function getReferrals() {
  return function (dispatch, getState) {
    axios.get('https://referly-api.herokuapp.com/referrals.json')
      .then((response) => {
        dispatch(addReferrals(response.data))
      })
      .catch((error) => console.error('axios error', error))
  }
}
