import React from "react"
import { connect } from "react-redux"

export class Referral extends React.Component {
  render() {
    console.log("referral props:", this.props)
    let  { referrals } = this.props
    let referralList = []
    referrals.forEach((referral, index) => {
      let ref = (
        <div key={referral.id}>
          <h1>{referral.title} {referral.clicks}</h1>
        </div>
      )
      referralList.push(ref)
    })

    return (
      <div>{referralList}</div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    referrals: state.referrals.referrals,
  }
)

export default connect(mapStateToProps)(Referral)
