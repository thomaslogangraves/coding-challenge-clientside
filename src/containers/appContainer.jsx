import React from "react"
import Router, {Link} from 'react-router';
import { connect } from "react-redux"
import * as referralActions from '../actions/referralActions'
import Referral from "../components/referrals"
import Spinner from '../components/spinner';
import { Row, Col } from 'react-materialize';
// const AppContainer = React.createClass ({
//   render() {
//
//     }
//     return (
//       <div className="container"> </div>
//     )
//   }
// })
//
//


class AppContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {children} = this.props;
    const {referrals, isLoadingReferrals, error } = this.props
		return (
			<Row> {isLoadingReferrals ? <Spinner /> : children}
        </Row>
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
