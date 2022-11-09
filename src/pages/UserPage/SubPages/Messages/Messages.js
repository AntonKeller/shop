import React, {useEffect, useRef, useState} from 'react';
import {Avatar, Divider, makeStyles, Typography, Button} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    arrow: {
        position: "absolute",
        margin: "20px",
        width: "40px",
        height: "50px",
        right: 0,
        bottom: 0,

        borderRadius: "2em",
        opacity: "0.95"
    },
    wr_user: {
        padding: "20px 10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",

    },
    wr_user_info: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "start"
    }
}));

const Messages = () => {
    const [messages, setMessages] = useState([])
    const myRef = useRef(null)
    const classes = useStyles();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(response => response.json())
            .then(response => setMessages(response))

        let bufMessages = [];
        messages.forEach(post => {
            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(response => response.json())
                .then(response => {
                    bufMessages.push({
                        name: response.name,
                        title: post.title
                    })
                    console.log("response.name", response.name)
                })
        })
        setMessages(bufMessages)
        console.log("bufMessages", bufMessages)
        console.log("messages", messages)
    }, [])

    const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <>
            {/*<div ref={myRef} className={classes.container}>*/}
            {/*    {*/}
            {/*        messages.map(message => {*/}
            {/*            return (*/}
            {/*                <div key={message.id}>*/}
            {/*                    <div className={classes.wr_user}>*/}
            {/*                        <Avatar style={{marginRight: "10px"}}>А</Avatar>*/}
            {/*                        <div className={classes.wr_user_info}>*/}
            {/*                            <Typography variant={"h6"} color={"primary"}>user: {message.userName}</Typography>*/}
            {/*                            <Typography variant={"p"} color={"secondary"}>{message.title}</Typography>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <Divider/>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
            {/*<Button onClick={executeScroll} color={"primary"} variant={"contained"} className={classes.arrow}>*/}
            {/*    <KeyboardArrowDownIcon onClick={executeScroll} />*/}
            {/*</Button>*/}
        </>
    );
};

export default Messages;
