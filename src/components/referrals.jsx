import React from "react"

export default class ReferralComponent extends React.Component {
  render() {
    let  { referrals } = this.props
    let referralList = []
    referrals.forEach((referral, index) => {
      let ref = (
        <div key={referral.id}>
          <h1>{referral.title}</h1>
          <h1>{referral.clicks}</h1>
        </div>
      )
      referralList.push(ref)
    })

    return (
      <div>{referralList}</div>
    )
  }
}
