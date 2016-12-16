import React from "react"
import { connect } from "react-redux"

import ReferralComponent from "../components/referrals"

class AppContainer extends React.Component ({
  componentDidMount() {
    let {dispatch, referrals} = this.props
    if (!referrals.isLoadingReferrals && referrals.referrals === undefined) {
      dispatch(referralActions.fetchReferrals())
    }
  },

  renderLoading() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            Loading...
          </div>
        </div>
      </div>
    )
  },

  render() {
    console.log(this.props)
    let { counters, referrals } = this.props
    if (referrals.isLoadingReferrals || referrals.referrals === undefined) {
      return this.renderLoading()
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>{process.env.BASE_API_URL}</p>
            {referrals.referrals !== undefined &&
              <ReferralComponent referrals={referrals.referrals} />
            }
          </div>
        </div>
      </div>
    )
  }
})

export default connect(AppContainer)
