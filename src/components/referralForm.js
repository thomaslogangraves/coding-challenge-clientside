import React, {Component} from 'react';
import createReferral from '../actions/referralCreateActions'

class ReferralForm extends Component{
	constructor(props){
		super(props);
    this.handleCreate = this.handleCreate.bind(this)
	}

  handleCreate(event) {
    event.preventDefault();
    let title = event.target.parentNode.firstChild.value
    let { dispatch } = this.props
    console.log("ref create:", createReferral)
    dispatch(createReferral(title))
  }

	render() {
    console.log("props:", this.props)
		return (
			<div className="form">
				<form>
          <input className="col s6 offset-s2" type="text" placeholder="referral name"/>
          <button className="col s2 offset-s1 waves-effect waves-light btn cyan darken-4"type="submit" onClick={this.handleCreate}>Add</button>
        </form>
			</div>
		)
	}
};

export default ReferralForm
