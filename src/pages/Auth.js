import React from 'react';
import Form from "../components/Auth/Form";
import {makeStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        height: "calc(100vh - 90px)",
    },
    container_menu: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#d4dfec",
        boxShadow: "inset 0.8px 0.8px 8px #aeb1cd",
    },
    wr_fans: {
        background: "#7a8d95",
        width: "100%",
        height: "40px",
        marginBottom: "auto",
        display: "flex",
    },
    fan: {
        marginRight: "6px",
        width: "44px",
        height: "44px",
        boxShadow: "0.8px 0.8px 6px grey",
    },
}));

const Auth = () => {

    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Box className={classes.container_menu}>
                <div className={classes.wr_fans}>
                </div>
                <Form/>
            </Box>
        </div>
    );
};

export default Auth;