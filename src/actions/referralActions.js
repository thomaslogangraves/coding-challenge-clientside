import * as types from './actionTypes'
import fetch from 'isomorphic-fetch'

export const requestData = () => {
	return {type: types.FETCH_REFERRALS}
};

export const receiveData = (json) => {
	return{
		type: types.FETCH_REFERRALS_SUCCESS,
		referrals: json.results,
		receivedAt: Date.now()
	}
};

export const receiveError = (json) => {
	return {
		type: types.FETCH_REFERRALS_FAILURE,
		referrals: json
	}
};

export const createReferral = (referral) => {
	return dispatch => {
		let url = "https://referly-api.herokuapp.com/referrals.json"
		let corsAvoid = "https://cors-anywhere.herokuapp.com/"
		let newUrl = corsAvoid + url
	}
}

export const fetchReferrals = () => {
  return dispatch => {
    dispatch(requestData())
		let url = "https://referly-api.herokuapp.com/referrals.json"
		let corsAvoid = "https://cors-anywhere.herokuapp.com/"
		let newUrl = corsAvoid + url
    return fetch(newUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)))
  }
}
