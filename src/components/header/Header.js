import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import Navigate from "./Navigate";
import Avatar from "@material-ui/core/Avatar";
import logotype from "../../assets/logotype.png"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing(2),
    },
    logotype:{
        width: "42px",
        height: "42px",
        marginLeft: theme.spacing(2),
    },
    avatar: {
        marginRight: theme.spacing(4),
    }
}));

const Header = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <a href="#">
                <img className={classes.logotype} src={logotype} alt="no"/>
            </a>
            <Navigate/>
            <Avatar className={classes.avatar} alt="Remy Sharp"
                    src="https://vanstrydonck.com/wp-content/uploads/2016/11/avatar_circle_2.png"/>
        </Paper>
    );
};

export default Header;