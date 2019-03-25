import {Component} from "react";
import React from "react";
import ReactJson from "react-json-view";
import {Grid} from "@material-ui/core";
import GetLoggedUser from "../../business/commands/get-logged-user";
import {tap} from "rxjs/operators";
import './user.css';

export default class User extends Component {
    #getLoggedUser = new GetLoggedUser();

    constructor(props) {
        super(props);

        this.state = {authCookies: undefined}
    }

    componentDidMount() {
        this.#getLoggedUser.execute()
            .pipe(tap((authCookies) => this.setState({authCookies})))
            .subscribe()
    }

    render() {
        if (!this.state.authCookies) {
            return null;
        }

        return (
            <Grid container spacing={16} alignItems={'center'} justify={'center'} direction={"column"}>
                <Grid item>
                    <ReactJson src={this.state.authCookies} enableClipboard={false} displayDataTypes={false}
                               style={{width: "100%"}}/>
                </Grid>
            </Grid>
        )
    }
}
