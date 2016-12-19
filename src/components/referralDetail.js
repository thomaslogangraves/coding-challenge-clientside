require('../css/referralDetail.css')
import React from "react"
import { connect } from "react-redux"

class ReferralDetail extends React.Component {
  render() {
    let searchReferral = this.props.params.referralTitle
    let { referrals } = this.props
    let referral = (referrals.filter(referral => referral.title === searchReferral))[0]
    console.log(referral)
    return (
      <div>
        <div className="referralDetail row">
          <div className="col s12"></div>
          <span className="col s9 m12 push-m3 l12 push-l3 flow-text">{referral.title} are the best!</span>
          <span className="col s9 m12 push-m3 l12 push-l3 flow-text">Come join us at Referly!</span>
          <img className="col s8 push-s2 m6 push-m3 l6 push-l3" src="https://lh3.googleusercontent.com/-pzas1Rsj5K4/Vn0-w_vlvLI/AAAAAAAAL7E/YCiqwcruYxc/s0/holiday-octocat.png"></img>
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
