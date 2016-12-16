import React from "react"
import { connect } from "react-redux"
import * as referralActions from '../actions/referralActions'
import Referral from "../components/referrals"

const AppContainer = React.createClass ({
  componentDidMount() {
    debugger;
    let {dispatch, referrals, isLoadingReferrals, error} = this.props
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
    let { referrals, isLoadingReferrals, error } = this.props
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
              <Referral referrals={referrals.referrals} />
            }
          </div>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => (
  { referrals: state.referrals,
    isLoadingReferrals: state.isLoadingReferrals,
    error: state.error
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
