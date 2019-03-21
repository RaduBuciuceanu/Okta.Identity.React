import {Component} from "react";
import React from "react";
import {Grid} from "@material-ui/core";

export default class NotFound extends Component {
    render() {
        return (
            <Grid container spacing={16} direction={"column"} alignItems={"center"} justify={"center"}>
                <Grid item>
                    <h1>Not found</h1>
                </Grid>
            </Grid>
        )
    }
}
