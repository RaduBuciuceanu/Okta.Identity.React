// src/Home.js

import React, {Component} from 'react';
import {withAuth} from '@okta/okta-react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {authenticated: null};
    }

    async componentDidMount() {
        await this.#checkAuthentication();
    }

    async componentDidUpdate() {
        await this.#checkAuthentication();
    }

    render() {
        if (this.state.authenticated === null) return null;
        return this.state.authenticated ?
            <button onClick={this.#logout}>Logout</button> :
            <button onClick={this.#login}>Login</button>;
    }
    
    #checkAuthentication = async () => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({authenticated});
        }
    };

    #login = async () => {
        this.props.auth.login('/');
    };

    #logout = async () => {
        this.props.auth.logout('/');
    };
}

export default withAuth(Home);
