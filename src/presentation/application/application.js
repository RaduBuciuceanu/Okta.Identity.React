// src/App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './home';
import Login from './login';
import Protected from './protected';

function onAuthRequired({history}) {
    history.push('/login');
}

class App extends Component {
    render() {
        return (
            <Router>
                <Security issuer='https://dev-896128.okta.com/oauth2/default'
                          client_id={'0oadijnbocsI5cyAd356'}
                          redirect_uri={window.location.origin + '/implicit/callback'}
                          onAuthRequired={onAuthRequired} >

                    <Route path='/' exact={true} component={Home} />
                    <SecureRoute path='/protected' component={Protected} />
                    <Route path='/login' render={() => <Login baseUrl='https://dev-896128.okta.com' />} />
                    <Route path='/implicit/callback' component={ImplicitCallback} />
                </Security>
            </Router>
        );
    }
}

export default App;
