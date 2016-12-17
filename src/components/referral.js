import React from 'react';


export class Referral extends React.Component {
  render(){
    let { referral } = this.props
    return (
      <div className="card-panel cyan darken-4 referral row">
        <span className="col s4">{referral.title}</span>
        <span className="col s3">{referral.clicks}</span>
        <span className="col s2 waves-effect"><i className="small material-icons">mode_edit</i></span>
        <span className="col s2 waves-effect"><i className="small material-icons">delete</i></span>
      </div>
    )
  }
}

export default Referral
