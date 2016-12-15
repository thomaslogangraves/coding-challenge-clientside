import React from "react"

export default class Referrals extends React.Component {
  render() {
    let  { referrals } = this.props
    let referralList = []
    referrals.forEach((item, index) => {
      let ref = (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <h1>{item.clicks}</h1>
        </div>
      )
      referralList.push(ref)
    })

    return (
      <div>{referralList}</div>
    )
  }
}
