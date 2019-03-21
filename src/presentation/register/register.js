import React, {Component} from "react";
import {Button, TextField, Grid} from "@material-ui/core";
import './register.css'

export default class Register extends Component {
    render() {
        return (
            <Grid container spacing={16} direction={"column"} alignItems={"center"} justify={"center"}>
                <Grid className="login-field" item>
                    <TextField fullWidth label={"Username"}/>
                </Grid>
                <Grid className="login-field" item>
                    <TextField fullWidth label={"Password"}/>
                </Grid>
                <Grid className="login-field" item>
                    <TextField fullWidth label={"Confirm password"}/>
                </Grid>
                <Grid className="login-field" item>
                    <Button fullWidth>Register</Button>
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

    #changeConfirmPassword = (event) => {
        this.setState({confirmPassword: event.target.value});
    };
}
