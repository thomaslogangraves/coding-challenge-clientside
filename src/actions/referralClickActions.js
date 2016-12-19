import * as types from './actionTypes'
import fetch from 'isomorphic-fetch'

export const reqClickReferral = () => {
  return{ type: types.REQ_CLICK_REFERRAL }
}

export const clickReferralSuccess = (clickedReferral) => {
  return {
    type: types.CLICK_REFERRAL_SUCCESS,
  }
}

export const clickReferralFailure = (json) => {
  return {
    type: types.CLICK_REFERRAL_FAILURE,
    error: json
  }
}

export const clickReferral = (clickedReferral, clicks) => {
	return dispatch => {
  let clicks  = clickedReferral.clicks + 1
	let request = new Request("https://referly-api.herokuapp.com/referrals/" + clickedReferral.id + "/", {
		method: 'PUT',
		body: JSON.stringify({
            title: clickedReferral.title,
            clicks: clicks
        }),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	});
		return fetch(request)
		.then(response => response.json())
		.then(json => dispatch(clickReferralSuccess(json)))
	}
}

export default clickReferral
