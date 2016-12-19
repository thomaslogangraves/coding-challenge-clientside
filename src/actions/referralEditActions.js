import * as types from './actionTypes'
import fetch from 'isomorphic-fetch'

export const openEdit = (referral) => {
  return {
    type: types.OPEN_EDIT,
    referralToEdit: referral
  }
}

export const reqEditReferral = () => {
  return{ type: types.REQ_EDIT_REFERRAL }
}

export const editReferralSuccess = (editedReferral) => {
  console.log("edited referral action:", editedReferral);
  return {
    type: types.EDIT_REFERRAL_SUCCESS,
    editedReferral: editedReferral,
    isOpen: false
  }
}

export const editReferralFailure = (json) => {
  return {
    type: types.EDIT_REFERRAL_FAILURE,
    error: json
  }
}

export const editReferral = (referralToEdit, editedTitle) => {
	return dispatch => {
		console.log(referralToEdit)
	let request = new Request("https://referly-api.herokuapp.com/referrals/" + referralToEdit.id + "/", {
		method: 'PUT',
		body: JSON.stringify({
            title: editedTitle
        }),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	});
		return fetch(request)
		.then(response => response.json())
		.then(json => dispatch(editReferralSuccess(json)))
	}
}

export default editReferral
