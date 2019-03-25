import {Component} from "react";
import React from "react";
import {Snackbar, IconButton} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import {tap} from "rxjs/operators";
import {notify} from "../../business/commands/notify";
import "./notification.css";

export default class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {notification: null};

        notify.listen()
            .pipe(tap((value) => this.setState({notification: value})))
            .subscribe();
    }

    render() {
        return (
            <Snackbar className={"notification"}
                      message={this.state.notification}
                      action={[this.#renderAction()]}
                      open={this.state.notification !== null}
                      autoHideDuration={3000}
                      anchorOrigin={this.#buildAnchorOrigin()}
                      onClose={this.#closeNotification}
            />
        )
    }

    #renderAction = () => {
        return (
            <IconButton key="close" aria-label="Close" onClick={this.#closeNotification}>
                <CloseIcon/>
            </IconButton>
        )
    };

    #closeNotification = () => {
        this.setState({notification: null});
    };

    #buildAnchorOrigin = () => {
        return {
            vertical: "top",
            horizontal: "center"
        }
    }
}
