import React from 'react';


export class Referral extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    let { referral } = this.props
    this.props.passReferral(referral)
  }

  render(){
    let { referral } = this.props
    return (
      <div className="card-panel cyan darken-4 referral row" onClick={this.handleClick}>
        <span className="col s4">{referral.title}</span>
        <span className="col s3">{referral.clicks}</span>
        <span className="col s2 waves-effect"><i className="small material-icons">mode_edit</i></span>
        <span className="col s2 waves-effect"><i className="small material-icons">delete</i></span>
      </div>
    )
  }
}

export default Referral
