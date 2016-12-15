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
