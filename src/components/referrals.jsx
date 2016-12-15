import React from 'react'
import { connect } from 'react-redux'

const Referrals = ({referrals}) => (
  <div>
    <h1>Referrals</h1>
    {referrals.map(referral => <p key={referral}>{referral}</p>)}
  </div>
)

function mapStateToProps(referrals) {
  return {
    referrals
  }
}

export default connect(mapStateToProps)(Referrals)
