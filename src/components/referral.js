require('../css/top.css')
import React from 'react';


class Referral extends React.Component {
  constructor() {
    super();
  }
  render(){
    let { referral } = this.props
    return (
      <div className="card-panel cyan darken-4 referral row flow-text">
        <span className="col s4 flow-text"><a href={"/landing/" + referral.title}>{referral.title}</a></span>
        <span className="col s3 flow-text">{referral.clicks}</span>
        <span className="col s2 waves-effect"><i className="small material-icons">mode_edit</i></span>
        <span className="col s2 waves-effect"><i className="small material-icons">delete</i></span>
      </div>
    )
  }
}

export default Referral
