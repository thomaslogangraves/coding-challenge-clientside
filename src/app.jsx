import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from './store';
import AppContainer from "./containers/appContainer";
import Error from './components/error';
import ReferralDetail from './components/referralDetail';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';
import { getReferrals } from './actions/referralActions'

const history = new createBrowserHistory();
const store = configureStore();

function loadData() {
	store.dispatch(getReferrals('https://referly-api.heroku.com/referrals/'));
};


ReactDOM.render(
      <Provider store={store}>
        <ReduxRouter>
          <Route path='/' component={AppContainer} />
          <Route path="/landing/?link={name}" component={ReferralDetail} />
          <Route path="/error" component={Error} />
        </ReduxRouter>
      </Provider>,
    document.getElementById('App')
)
