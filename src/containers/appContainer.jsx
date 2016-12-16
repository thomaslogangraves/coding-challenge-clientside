import React from "react"
import { connect } from "react-redux"
import * as referralActions from '../actions/referralActions'
import ReferralComponent from "../components/referrals"

const AppContainer = React.createClass ({
  componentDidMount() {
    debugger;
    let {dispatch, referrals, isLoadingReferrals} = this.props
    if (!isLoadingReferrals && referrals === undefined) {
      dispatch(referralActions.getReferrals())
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
    console.log("these are props", this.props)
    let { referrals, isLoadingReferrals } = this.props
    console.log("after grabbed", isLoadingReferrals)
    if (isLoadingReferrals || referrals === undefined) {
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

const mapStateToProps = (state) => (
  { referrals: state.referrals,
    isLoadingReferrals: state.isLoadingReferrals
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
      getReferrals () {
        dispatch({type: types.FETCH_REFERRALS})
      }
  }
}

export default connect(mapStateToProps)(AppContainer)
