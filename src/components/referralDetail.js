require('../css/referralDetail.css')
import React from "react"
import { connect } from "react-redux"

export class ReferralDetail extends React.Component {
  render() {
    let searchReferral = this.props.params.referralTitle
    let { referrals } = this.props
    let referral = (referrals.filter(referral => referral.title === searchReferral))[0]
    console.log(referral)
    return (
      <div>
        <div className="referralDetail row">
          <div className="col s12"></div>
          <span className="col s10 offset-s2">{referral.title} are the best!</span>
          <span className="col s6 offset-s2">Come join us at Referly!</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    referrals: state.referrals.referrals,
  }
)

export default connect(mapStateToProps)(ReferralDetail)
