import * as types from './actionTypes'
import fetch from 'isomorphic-fetch'

export const reqDeleteReferral = () => {
  return{ type: types.REQ_DELETE_REFERRAL }
}

export const deleteReferralSuccess = (deletedReferralId) => {
  return {
    type: types.DELETE_REFERRAL_SUCCESS,
    deletedReferralId: deletedReferralId
  }
}

export const deleteReferralFailure = (json) => {
  return {
    type: types.DELETE_REFERRAL_FAILURE,
    error: json
  }
}

export const deleteReferral = (referralToDeleteId) => {
	return dispatch => {
	let request = new Request("https://referly-api.herokuapp.com/referrals/" + referralToDeleteId +"/", {
		method: 'DELETE',
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	});
		return fetch(request)
		.then(response => dispatch(deleteReferralSuccess(referralToDeleteId)))
	}
}

export default deleteReferral
