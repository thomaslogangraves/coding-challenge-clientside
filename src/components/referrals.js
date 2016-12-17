require('../css/referral.css')
import React from "react"
import { connect } from "react-redux"


export class Referral extends React.Component {
  render() {
    console.log("referral props:", this.props)
    let  { referrals } = this.props
    let referralList = []
    referrals.forEach((referral, index) => {
      let ref = (
        <div className="card-panel cyan darken-4 referral row" key={referral.id}>
          <span className="col s4">{referral.title}</span>
          <span className="col s3">{referral.clicks}</span>
          <span className="col s2">edit</span>
          <span className="col s2">delete</span>
        </div>
      )
      referralList.push(ref)
    })

    return (
      <div className="col s6">{referralList}</div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    referrals: state.referrals.referrals,
  }
)

export default connect(mapStateToProps)(Referral)
