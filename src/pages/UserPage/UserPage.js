import React, {useState} from 'react';
import {makeStyles, Paper} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Tabs from "./Tabs";
import Messages from "./SubPages/Messages/Messages"
import Friends from "./SubPages/Friends/Friends";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    wr_sub_page: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "stretch",
        width: "100%",
        maxHeight: "91vh",
        // border: "1px dashed black",
        // overflowY: "scroll",
        // "&::-webkit-scrollbar": {
        //     display: "none",
        // },
        zIndex: 3,
    },
}));

const subPages = {
    "Messages": <Messages/>,
    "Friends": <Friends/>,
};

const UserPage = () => {
    const [activePageName, setActivePageName] = useState("Messages")
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth={"md"}>
            <Hidden xsDown>
                <Tabs setSubPageName={setActivePageName}/>
            </Hidden>
            <Paper elevation={0} className={classes.wr_sub_page}>
                {
                    subPages[activePageName]
                }
            </Paper>
        </Container>
    );
};

export default UserPage;