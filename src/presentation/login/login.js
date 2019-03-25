import React, {Component} from "react";
import {Button, TextField, Grid} from "@material-ui/core";
import './login.css';
import LoginCommand from '../../business/commands/login';
import {notify} from "../../business/commands/notify";
import {tap} from "rxjs/operators";

export default class Login extends Component {
    #loginCommand = new LoginCommand();

    render() {
        return (
            <Grid container spacing={16} direction={"column"} alignItems={"center"} justify={"center"}>
                <Grid className="login-field" item>
                    <TextField fullWidth label={"Username"} onChange={this.#changeUsername}/>
                </Grid>
                <Grid className="login-field" item>
                    <TextField fullWidth label={"Password"} type={"password"} onChange={this.#changePassword}/>
                </Grid>
                <Grid className="login-field" item>
                    <Button fullWidth onClick={this.#login}>Login</Button>
                </Grid>
            </Grid>
        )
    }

    #changeUsername = (event) => {
        this.setState({username: event.target.value});
    };

    #changePassword = (event) => {
        this.setState({password: event.target.value});
    };

    #login = () => {
        this.#loginCommand.execute(this.#buildCredentials())
            .pipe(tap(() => notify.execute('Done.')))
            .subscribe();
    };

    #buildCredentials = () => {
        return {
            username: this.state.username,
            password: this.state.password,
        }
    };
}
