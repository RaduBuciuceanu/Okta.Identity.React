import React, {Component} from 'react';
import OktaAuth from '@okta/okta-auth-js';
import {withAuth} from '@okta/okta-react';

class LoginForm extends Component {
    #okta;

    constructor(props) {
        super(props);
        this.state = this.#buildState();
        this.#okta = new OktaAuth({url: props.baseUrl});
    }

    render() {
        if (this.state.sessionToken) {
            this.props.auth.redirect({sessionToken: this.state.sessionToken});
            return null;
        }

        return (
            <form onSubmit={this.#login}>
                <label>
                    Username:
                    <input id="username" type="text" value={this.state.username} onChange={this.#changeUsername}/>

                    Password:
                    <input id="password" type="password" value={this.state.password} onChange={this.#changePassword}/>
                </label>

                <input id="submit" type="submit" value="Submit"/>
            </form>
        );
    }

    #buildState = () => {
        return {
            sessionToken: null,
            username: '',
            password: ''
        };
    };

    #login = (event) => {
        event.preventDefault();

        this.#okta.signIn({username: this.state.username, password: this.state.password})
            .then(response => this.setState({sessionToken: response.sessionToken}))
            .catch(err => console.log('Found an error', err));
    };

    #changeUsername = (event) => {
        this.setState({username: event.target.value});
    };

    #changePassword = (event) => {
        this.setState({password: event.target.value});
    };
}

export default withAuth(LoginForm);
