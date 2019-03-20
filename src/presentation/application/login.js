import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import {withAuth} from '@okta/okta-react';

class Login extends Component {
    async constructor(props) {
        super(props);
        this.state = {authenticated: null};
        await this.#checkAuthentication();
    }

    async componentDidUpdate() {
        await this.#checkAuthentication();
    }

    render() {
        if (this.state.authenticated === null) return null;

        if (this.state.authenticated)   {
            return <Redirect to={{pathname: '/'}}/>;
        }

        return <LoginForm baseUrl={this.props.baseUrl}/>;
    }

    #checkAuthentication = async () => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({authenticated});
        }
    };
}

export default withAuth(Login);
