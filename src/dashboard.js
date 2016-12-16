import { connect } from 'react-redux'

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

export default connect(mapStateToProps)(dashboard)
