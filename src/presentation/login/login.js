import React, {Component} from "react";
import {Button, TextField, Grid} from "@material-ui/core";
import './login.css'

export default class Login extends Component {
    render() {
        return (
            <Grid container spacing={16} direction={"column"} alignItems={"center"} justify={"center"}>
                <Grid className="login-field" item>
                    <TextField fullWidth label={"Username"} onChange={this.#changeUsername}/>
                </Grid>
                <Grid className="login-field" item>
                    <TextField fullWidth label={"Password"} onChange={this.#changePassword}/>
                </Grid>
                <Grid className="login-field" item>
                    <Button fullWidth onClick={this.#login}>Login</Button>
                </Grid>
            </Grid>
        )
    }

    #changeUsername = (event) => {
        console.log(event.target.value);
        this.setState({username: event.target.value});
    };

    #changePassword = (event) => {
        this.setState({password: event.target.value});
    };

    #login = (event) => {
        console.log('Login');
    }
}
