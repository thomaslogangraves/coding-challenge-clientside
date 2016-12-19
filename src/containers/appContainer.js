require('../css/top.css')
import React from "react"
import Router, {Link} from 'react-router';
import { connect } from "react-redux"
import Spinner from '../components/spinner';
import Header from '../components/header';


class AppContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {children} = this.props;
    const {referrals, isLoadingReferrals, error } = this.props
		return (
			<div className="top container"> <Header/>{isLoadingReferrals ? <Spinner /> : children}
		</div>
		);
	}
}
const mapStateToProps = (state) => (
  { isLoadingReferrals: state.referrals.isLoadingReferrals,
    error: state.referrals.error,
    referrals: state.referrals.referrals,
  }
)

export default connect(mapStateToProps)(AppContainer)
