require('../css/top.css')
import React from 'react';


class Referral extends React.Component {
  constructor(){
    super();
    this.handleOpenModal = this.handleOpenModal.bind(this)
  }
  handleOpenModal(){
    let { referral } = this.props
    this.props.openModal(referral)
  }
  render(){
    let { referral } = this.props
    return (
      <div className="card-panel cyan darken-4 referral row flow-text">
        <span className="col s4 flow-text"><a href={"/landing/" + referral.title}>{referral.title}</a></span>
        <span className="col s3 flow-text">{referral.clicks}</span>
        <span className="col s2 waves-effect" onClick={this.handleOpenModal}><i className="small material-icons">mode_edit</i></span>
        <span className="col s2 waves-effect"><i className="small material-icons">delete</i></span>
      </div>
    )
  }
}

export default Referral
