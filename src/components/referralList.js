require('../css/referral.css')
import React from "react"
import { connect } from "react-redux"
import Referral from './referral'

export class ReferralList extends React.Component {
  constructor() {
    super();
  }
  render() {
    let  { referrals } = this.props
    return (
      <div className="col s6">
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
  }
)

export default connect(mapStateToProps)(ReferralList)
