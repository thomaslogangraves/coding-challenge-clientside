require('../css/referral.css')
import React from "react"
import { connect } from "react-redux"
import Referral from './referral'
import ReferralForm from './referralForm'
import ReferralEditModal from './referralEditModal'
import {handleDeleteReferral} from '../actions/referralActions'
import createReferral from '../actions/referralCreateActions'
import deleteReferral from '../actions/referralDeleteActions'
import {openEdit} from '../actions/referralEditActions'
import { Modal, Button } from 'react-materialize'

class ReferralList extends React.Component {
  constructor() {
    super();
    this.handleDeleteReferral = this.handleDeleteReferral.bind(this)
    this.handleCreateReferral = this.handleCreateReferral.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  openModal(referral) {
    let { dispatch } = this.props
    console.log("top level referral:", referral)
    dispatch(openEdit(referral))
  }
  closeModal() {
    let { dispatch } = this.props
    console.log("closing modal")
    editReferral(referral)
    dispatch(closeEdit())
  }

  handleCreateReferral(title) {
    let { dispatch } = this.props
    console.log("in the handle create", title)
    dispatch(createReferral(title))
  }

  handleDeleteReferral(id){
    let { dispatch } = this.props
    console.log("in the handle delete", id)
    dispatch(deleteReferral(id))
  }

  render() {
    let { referrals, referralToEdit, isOpen } = this.props
    return (
      <div className="col s6">
        <ReferralForm  handleCreateReferral={this.handleCreateReferral}/>
        <div className="ref-heading col l12">
          <span className="ref-heading col l10 m8">name</span>
          <span className="ref-heading col l7 m4">clicks</span>
          <span className="ref-heading col l3 m2">edit</span>
          <span className="ref-heading col l2 m2">delete</span>
        </div>
        <div className="col s12">
            {referrals.map((referral, i) =>
              <div key={referral.id}>
                <Referral
                  handleDeleteReferral={this.handleDeleteReferral}
                  referral={referral}
                  openModal={this.openModal}
                />
              </div>
            )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    referrals: state.referrals.referrals,
    createdReferral: state.createdReferral.createdReferral,
    isReferralDeleted: state.deletedReferral.isReferralDeleted,
    deletedReferralId: state.deletedReferral.deletedReferralId,
    isOpen: state.referrals.isOpen
  }
)

export default connect(mapStateToProps)(ReferralList)
