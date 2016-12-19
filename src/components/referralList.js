require('../css/referral.css')
import React from "react"
import { connect } from "react-redux"
import Referral from './referral'
import ReferralForm from './referralForm'
import ReferralEditModal from './referralEditModal'
import {handleDeleteReferral} from '../actions/referralActions'
import createReferral from '../actions/referralCreateActions'
import deleteReferral from '../actions/referralDeleteActions'
import editReferral from '../actions/referralEditActions'
import {openEdit} from '../actions/referralEditActions'
import { Modal, Button } from 'react-materialize'

class ReferralList extends React.Component {
  constructor() {
    super();
    this.handleDeleteReferral = this.handleDeleteReferral.bind(this)
    this.handleCreateReferral = this.handleCreateReferral.bind(this)
    this.handleEditReferral = this.handleEditReferral.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  closeModal() {
    let { dispatch } = this.props
    console.log("closing modal")
    editReferral(referral)
    dispatch(closeEdit())
  }

  handleCreateReferral(title) {
    let { dispatch } = this.props
    dispatch(createReferral(title))
  }

  handleEditReferral(referral, editedTitle) {
    let { dispatch } = this.props
    dispatch(editReferral(referral, editedTitle))
  }


  handleDeleteReferral(id){
    let { dispatch } = this.props
    dispatch(deleteReferral(id))
  }

  render() {
    let { referrals, referralToEdit, isOpen } = this.props
    return (
      <div className="col s12">
        <ReferralForm  handleCreateReferral={this.handleCreateReferral}/>
        <div className="ref-heading col s12">
          <span className="ref-heading col s3 offset-s1 l10 m8">name</span>
          <span className="ref-heading col s1 offset-s2 l7 m4">clicks</span>
          <span className="ref-heading col s2 offset-s1 l3 m2">edit</span>
          <span className="ref-heading col s2 l2 m2">delete</span>
        </div>
        <div className="col s12">
            {referrals.map((referral, i) =>
              <div key={referral.id}>
                <Referral
                  handleDeleteReferral={this.handleDeleteReferral}
                  referral={referral}
                  handleEditReferral={this.handleEditReferral}
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
