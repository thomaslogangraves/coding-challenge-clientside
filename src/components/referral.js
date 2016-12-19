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
      <div className="card-panel cyan darken-4 referral col s12 flow-text">
        <a className="col s8 m6" href={"/landing/" + referral.title}>
          <div>
            <span className="col s5 m1 flow-text">{referral.title}</span>
            <span className="col s1 m9 offset-s3 push-m3 flow-text">{referral.clicks}</span>
          </div>
        </a>
        <Modal
            header="Edit Title"
            actions={<Button waves='light' modal='close' flat onClick={this.passEditReferral}>Save</Button>}
            trigger={
              <button className="waves-effect btn col s2 m1 white"><i className="small material-icons icon-black">mode_edit</i></button>
            }>
            <form>
              <input id="edit" type="text" defaultValue={referral.title}/>
            </form>
        </Modal>
        <div className='diver'></div>
        <button className="col s2 m1 waves-effect btn white" onClick={this.passDeleteReferral}><i className="small material-icons icon-black">delete</i></button>
      </div>
    )
  }
}

export default Referral
