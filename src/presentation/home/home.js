import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import './home.css'
import {Grid} from "@material-ui/core";

export default class Home extends Component {
    render() {
        return (
            <Grid container spacing={16} alignItems={'center'} justify={'center'} direction={"column"}>
                <Grid className="home-field" item>
                    <Button fullWidth onClick={this.#login}>Login</Button>
                </Grid>
                <Grid className="home-field" item>
                    <Button fullWidth onClick={this.#register}>Register</Button>
                </Grid>
            </Grid>
        )
    }

    #login = () => {
        this.props.history.push('/login');
    };

    #register = () => {
        this.props.history.push('/register');
    };
}
