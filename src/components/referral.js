require('../css/top.css')
require('../css/referral.css')
import React from 'react';
import { Modal, Button } from 'react-materialize'

class Referral extends React.Component {
  constructor(){
    super();
    this.passDeleteReferral = this.passDeleteReferral.bind(this);
    this.passEditReferral = this.passEditReferral.bind(this);
  }

  passDeleteReferral() {
    let { id } = this.props.referral
    this.props.handleDeleteReferral(id)
  }
  passEditReferral(event) {
    event.preventDefault();
    let { referral } = this.props
    let newTitle = event.target.parentNode.parentElement.firstChild.lastChild.firstChild.value
    console.log("new title:", newTitle)
    this.props.handleEditReferral(referral, newTitle)
  }
  render(){
    let { referral } = this.props
    return (
      <div className="card-panel cyan darken-4 referral row flow-text">
        <a href={"/landing/" + referral.title}>
          <div className="col s12">
            <span className="col s2 offset-s2 flow-text">{referral.title}</span>
            <span className="col s3 offset-s5 flow-text">{referral.clicks}</span>
          </div>
        </a>
        <Modal
            header="Edit Title"
            actions={<Button waves='light' modal='close' flat onClick={this.passEditReferral}>Save</Button>}
            trigger={
              <button className="waves-effect btn col s1 white"><i className="small material-icons icon-black">mode_edit</i></button>
            }>
            <form>
              <input id="edit" type="text" defaultValue={referral.title}/>
            </form>
        </Modal>
        <button className="col s1 waves-effect btn white" onClick={this.passDeleteReferral}><i className="small material-icons icon-black">delete</i></button>
      </div>
    )
  }
}

export default Referral
