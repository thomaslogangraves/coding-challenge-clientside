import "babel-polyfill";
import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import createHistory from 'history/createBrowserHistory'
import store from './store';
import AppContainer from "./containers/appContainer";
import Error from './components/error';
import Referrals from './components/referrals';
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
            <Route path="/" component={Referrals} onEnter={loadData}/>
            <Route path="/landing" component={ReferralDetail}/>
            <Route path="/error" component={Error}/>
          </Route>
        </Router>
      </Provider>,
     document.getElementById('App')
)
