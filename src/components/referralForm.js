import React from 'react';

class ReferralForm extends React.Component{
	constructor(props){
		super(props);
    this.passCreateReferral = this.passCreateReferral.bind(this)
	}

  passCreateReferral(event) {
    event.preventDefault();
    let title = event.target.parentNode.firstChild.value
		event.target.parentNode.firstChild.value = ""
		this.props.handleCreateReferral(title)
  }

	render() {
		return (
			<div className="form">
				<form>
          <input className="col s6 offset-s2" type="text" placeholder="referral name"/>
          <button className="col s2 offset-s1 waves-effect waves-light btn cyan darken-4"type="submit" onClick={this.passCreateReferral}>Add</button>
        </form>
			</div>
		)
	}
};

export default ReferralForm
