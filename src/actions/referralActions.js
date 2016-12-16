import axios from 'axios'
import * as types from './actionTypes'


import { pushState } from 'redux-react-router';

function requestData() {
	return {type: types.FETCH_REFERRALS}
};

function receiveData(json) {
	return{
		type: types.FETCH_REFERRALS_SUCCESS,
		data: json
	}
};

function receiveError(json) {
	return {
		type: types.FETCH_REFERRALS_FAILURE,
		data: json
	}
};

export function getReferrals(url) {
	return function(dispatch) {
		dispatch(requestData());
		return axios({
			url: url,
			timeout: 500,
			method: 'get',
		})
			.then(function(response) {
				dispatch(receiveData(response.data));
			})
			.catch(function(response){
				dispatch(receiveError(response.data));
				dispatch(pushState(null,'/error'));
			})
	}
};
