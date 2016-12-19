import * as types from './actionTypes'
import fetch from 'isomorphic-fetch'

export const reqCreateReferral = () => {
	return {type: types.REQ_CREATE_REFERRAL}
};

export const createReferralSucess = (createdReferral) => {
	return{
		type: types.CREATE_REFERRAL_SUCCESS,
		createdReferral: createdReferral,
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
		body: JSON.stringify({
            title: referral
        }),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	})
		return fetch(request)
		.then(response => response.json())
		.then(json => dispatch(createReferralSucess(json)))
	}
}

export default createReferral
