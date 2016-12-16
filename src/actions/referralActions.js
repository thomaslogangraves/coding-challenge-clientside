import axios from 'axios'
import * as types from './actionTypes'

function requestReferrals() {
  return {type: types.REQUEST_REFERRALS}
};

function addReferrals() {
  return { type: types.ADD_REFERRALS }
};

export function getReferrals(url) {
  let url = "https://referly-api.herokuapp.com/referrals.json"
  return function (dispatch) {
    axios.get(url)
      .then((response) => dispatch({
        type: types.FETCH_REFFERALS_SUCCESS,
        data: response.data
      }).error((response) => dispatch({
        type: types.FETCH_REFERRALS_FAILURE,
        error: response.error
      })
  }
};
