import React from "react"

import { connect } from "react-redux"

import * as actionsReferrals from "../actions/actionsReferrals"
import Referrals from "../components/Referrals"

@connect(state => ({
  referrals: state.referrals,
}))
export default class App1Container extends React.Component {
  componentDidMount() {
    let {dispatch, referrals} = this.props
    if (!referrals.isLoadingReferrals && referrals.referrals === undefined) {
      dispatch(actionsReferrals.fetchReferrals())
    }
  }

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
  }

  render() {
    let { referrals } = this.props
    if (referrals.isLoadingReferrals || referrals.referrals === undefined) {
      return this.renderLoading()
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>{process.env.BASE_API_URL}</p>
            {referrals.referrals !== undefined &&
              <Referrals referrals={referrals.referrals} />
            }
          </div>
        </div>
      </div>
    )
  }
}