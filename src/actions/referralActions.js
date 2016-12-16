import { request } from "../utils"

export const FETCH_REFERRALS = "FETCH_REFERRALS"
export const FETCH_REFERRALS_SUCCESS = "FETCH_REFERRALS_SUCCESS"
export const FETCH_REFERRALS_ERROR400 = "FETCH_REFERRALS_ERROR400"
export const FETCH_REFERRALS_ERROR500 = "FETCH_REFERRALS_ERROR500"
export const FETCH_REFERRALS_FAILURE = "FETCH_REFERRALS_FAILURE"

export function fetchReferrals() {
  return dispatch => {
    let url = "https://referly-api.herokuapp.com/referrals.json"
    dispatch({type: FETCH_REFERRALS})
    return request(
      url, {},
      (json) => { dispatch({type: FETCH_REFERRALS_SUCCESS, res: json}) },
      (json) => { dispatch({type: FETCH_REFERRALS_ERROR400, res: json}) },
      (res) => { dispatch({type: FETCH_REFERRALS_ERROR500, res: res}) },
      (ex) => { dispatch({type: FETCH_REFERRALS_FAILURE, error: ex}) },
    )
  }
}
