import * as types from './actionTypes'
import fetch from 'isomorphic-fetch'

export const reqDeleteReferral = () => {
  return{ type: types.REQ_DELETE_REFERRAL }
}

export const deleteReferralSuccess = (deletedReferral) => {
  return {
    type: types.DELETE_REFERRAL_SUCCESS,
    deletedReferral: deletedReferral
  }
}

export const deleteReferralFailure = (json) => {
  return {
    type: types.DELETE_REFERRAL_FAILURE,
    error: json
  }
}

export const deleteReferral = (referralToDelete) => {
	return dispatch => {
		console.log("referral to delete:", referralToDelete)
	let request = new Request("https://referly-api.herokuapp.com/referrals/" + referralToDelete.id, {
		method: 'DELETE',
		body: JSON.stringify({
            referralToDelete
        }),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	});
		return fetch(request)
		.then(response => response.json())
		.then(json => dispatch(deleteReferralSuccess(json)))
	}
}
