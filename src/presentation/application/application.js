import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "../home/home";
import Register from "../register/register";
import Login from "../login/login";
import NotFound from "../not-found/not-found";

export default class Application extends Component {
    #issuer = 'https://dev-896128.okta.com/oauth2/default';
    #clientId = '0oadijnbocsI5cyAd356';
    #redirectUrl = `${window.location.origin}/implicit/callback`;
    #loginUrl = 'https://dev-896128.okta.com';

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/404" component={NotFound}/>

                    <Redirect from="/" exact to="/home"/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        );
    }
}
