import * as types from './actionTypes'
import fetch from 'isomorphic-fetch'

export const reqCreateReferral = () => {
	return {type: types.REQ_CREATE_REFERRAL}
};

export const createReferralSucess = (json) => {
  console.log(json)
	return{
		type: types.CREATE_REFERRAL_SUCCESS,
		referrals: json.results,
		receivedAt: Date.now()
	}
};

export const createReferralError = (json) => {
	return {
		type: types.CREATE_REFERRAL_FAILURE,
		referrals: json
	}
};

export const createReferral = (referral) => {
	return dispatch => {
	let request = new Request("https://referly-api.herokuapp.com/referrals/", {
		method: 'POST',
		mode: 'cors',
		redirect: 'follow',
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	});
		return fetch(request)
		.then(response => response.json())
		.then(json => dispatch(createReferralSucess(json)))
	}
}

export default createReferral
