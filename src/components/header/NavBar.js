import React from 'react';
import {Button, Box, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import MyBtn from "./MyBtn";
import {useSelector, useDispatch} from "react-redux";
import {counterSelector, inc, dec} from "../../store/slices/counterSlices";

const useStyles = makeStyles((theme) => ({
    container: {
        background: "#2191b9",

        padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
        borderRadius: "2em",
        "& > *": {
            marginRight: theme.spacing(4),
        },
        "& :last-child": {
            marginRight: "1px",
        },
    },
    btn_link: {
        borderRadius: "2em",
    },
}));

const urls = [
    {
        url: "/Products",
        name: "Товары",
    },
    {
        url: "/Gallery",
        name: "Галерея",
    },
    {
        url: "/Discussion",
        name: "Обсуждение",
    },
    {
        url: "/Subscription",
        name: "Подписка",
    },
    {
        url: "/About",
        name: "О нас",
    },
]

const NavBar = () => {
    const classes = useStyles();
    // const count = useSelector(counterSelector.getCounter);
    // const dispatch = useDispatch();

    return (
        <Box color={"primary"} className={classes.container}>
            {
                urls.map(item => {
                    return(
                        <Button key={item.url} className={classes.btn_link} variant={"text"}>
                            <Link style={{color: "#fff"}} to={item.url}>{item.name}</Link>
                        </Button>
                    )
                })
            }
        </Box>
    );
};

export default NavBar;
