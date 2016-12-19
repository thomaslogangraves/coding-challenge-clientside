import "babel-polyfill";
import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import createHistory from 'history/createBrowserHistory'
import store from './store/store';
import AppContainer from "./containers/appContainer";
import Error from './components/error';
import Referral from './components/referral';
import ReferralForm from './components/referralForm';
import ReferralContainer from './containers/referralContainer';
import ReferralDetail from './components/referralDetail';
import { fetchReferrals } from './actions/referralActions';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store)

function loadData() {
	store.dispatch(fetchReferrals());
};

ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <Route component={AppContainer}>
            <Route path="/" component={ReferralContainer} onEnter={loadData}>
							<Route component={ReferralForm} />
							<Route component={Referral} />
						</Route>
            <Route path="/landing/:referralTitle" component={ReferralDetail} onEnter={loadData} />
            <Route path="/error" component={Error}/>
          </Route>
        </Router>
      </Provider>,
     document.getElementById('App')
)
