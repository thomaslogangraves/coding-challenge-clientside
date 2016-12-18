require('../css/referral.css')
import React from "react"
import { connect } from "react-redux"
import Referral from './referral'
import ReferralForm from './referralForm'

class ReferralList extends React.Component {
  openModal(referral) {
    console.log("top level referral:", referral)
  }
  render() {
    let  { referrals, dispatch, newReferral} = this.props
    if(newReferral != undefined) {
      referrals.push(newReferral)
    }
    return (
      <div className="col s6">
        <ReferralForm  dispatch={dispatch}/>
        <div className="ref-heading col s12">
          <span className="ref-heading col s4">name</span>
          <span className="ref-heading col s3">clicks</span>
          <span className="ref-heading col s2">edit</span>
          <span className="ref-heading col s2">delete</span>
        </div>
        <div className="col s12">
            {referrals.map((referral, i) =>
              <div key={referral.id}>
                <Referral
                  referral={referral}
                  openModal={this.openModal}
                />
              </div>
            )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    referrals: state.referrals.referrals,
    newReferral: state.createReferral.newReferral
  }
)

export default connect(mapStateToProps)(ReferralList)
