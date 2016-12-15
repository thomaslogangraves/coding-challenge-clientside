export function addReferral(referral){
  return {
    type: 'addReferral',
    referral
  }
}

export function deleteReferral(index){
  return {
    type: 'deleteReferral',
    index
  }
}


export function requestReferrals(){
  return {
    type: 'requestReferrals',
    result: makeReferralsRequest("http//:referraly.heroku.com/referrals/")
  }
}
