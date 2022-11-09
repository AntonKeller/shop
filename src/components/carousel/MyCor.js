import React from 'react';
import {Carousel} from 'antd';
import {makeStyles} from "@material-ui/core";


const compress = (array) => {
    return array.join(' ')
}

const useStyles = makeStyles((theme) => ({
    container:{
        width: "100%",
    },

    carousel_item: {
        position: "relative",
        paddingTop: "28%",
        userSelect: "none",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textShadow: "1px 1px 4px #00000085",
    },

    item_title: {
        color: "#a14b9e",
        fontSize: "28px",
        textShadow: "8px 8px 28px #00000055, -2px -2px 4px #ffffff60",
    },

    item_sub_title: {
        color: "#fbf1ff",
        fontSize: "18px",
        textShadow: "4px 4px 14px #00000055, -2px -2px 4px #ffffff60",
    },

    item_one: {
        background: "#c98cff65",
    },

    item_two: {
        background: "#8cc4ff65",
    },

    item_three: {
        background: "#ff8c8c65",
    },

    item_four: {
        background: "#8cffc465",
    },
}));


const MyCor = () => {

    const classes = useStyles();

    return (
        <Carousel className={classes.container}>
            <div className={compress([classes.carousel_item, classes.item_one])}>Magic Of Designers</div>
            <div className={compress([classes.carousel_item, classes.item_two])}>Magic Of Designers</div>
            <div className={compress([classes.carousel_item, classes.item_three])}>Magic Of Designers</div>
            <div className={compress([classes.carousel_item, classes.item_four])}>Magic Of Designers</div>
        </Carousel>
    );
};

export default MyCor;