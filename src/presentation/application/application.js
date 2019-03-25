import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "../home/home";
import Login from "../login/login";
import NotFound from "../not-found/not-found";
import Notification from "../notification/notification";
import User from "../user/user";

export default class Application extends Component {
    render() {
        return (
            <Router>
                <Notification/>

                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/user" component={User}/>
                    <Route path="/404" component={NotFound}/>

                    <Redirect from="/" exact to="/home"/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        );
    }
}
