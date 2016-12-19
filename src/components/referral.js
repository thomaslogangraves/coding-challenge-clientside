require('../css/top.css')
import React from 'react';
import { Modal, Button } from 'react-materialize'

class Referral extends React.Component {
  constructor(){
    super();
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.passDeleteReferral = this.passDeleteReferral.bind(this);
  }
  handleOpenModal(){
    let { referral } = this.props
    this.props.openModal(referral)
  }

  passDeleteReferral() {
    let { id } = this.props.referral
    this.props.handleDeleteReferral(id)
  }
  render(){
    let { referral } = this.props
    return (
      <div className="card-panel cyan darken-4 referral row flow-text">

        <span className="col s4 flow-text"><a href={"/landing/" + referral.title}>{referral.title}</a></span>
        <span className="col s3 flow-text">{referral.clicks}</span>
        <Modal
            header="Edit Title"
            fixedFooter
            trigger={
              <button className="waves-effect waves-light btn col s1 cyan darken-4"><i className="small material-icons">mode_edit</i></button>
            }>
            <form>
              <input type="text" defaultValue={referral.title}/>
              <button className="waves-effect btn col s2 cyan darken-4">Save</button>
            </form>
        </Modal>
        <button className="col s1 waves-effect waves-light btn cyan darken-4" onClick={this.passDeleteReferral}><i className="small material-icons">delete</i></button>
      </div>
    )
  }
}

export default Referral
