import React, {Suspense} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    row_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    subscribe_block: {
        borderRadius: 0,
        height: "220px",
        padding: theme.spacing(6),
        background: "#c491ff",
    },
    sub_1: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        borderRadius: 0,
        height: "360px",
        background: `url("https://get.wallhere.com/photo/1920x1200-px-bridge-bridges-gate-golden-1783391.jpg")`,
        backgroundSize: "cover",
        "&:hover": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    sub_2: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        borderRadius: 0,
        height: "360px",
        background: `url("https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg")`,
        backgroundSize: "cover",
        "&:hover": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    sub_3: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        borderRadius: 0,
        height: "380px",
        background: `url("https://get.wallhere.com/photo/landscape-Italy-lake-nature-building-reflection-morning-fjord-wilderness-Alps-cloud-mountain-atmospheric-phenomenon-computer-wallpaper-mountainous-landforms-landform-geographical-feature-aerial-photography-mountain-range-mountain-landscape-556086.jpg")`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        "&:hover": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    text: {
        fontSize: "28px",
        color: "#ffffff",
    },
    title_wrapper: {
        width: "100%",
    },
}));

const Subscribe = () => {
    const classes = useStyles();
    return (
            <div className={classes.row_container}>
                <Grid container spacing={1}>
                    <Grid item xs={7}>
                        <Paper elevation={6} className={classes.sub_1}>
                            <Typography className={classes.text}>9900 руб. Подпишись.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper onLoad={() => {
                            console.log("Загружено")
                        }} elevation={6} className={classes.sub_2}>
                            <Typography className={classes.text}>Подпишись.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={6} className={classes.sub_3}>
                            <Typography className={classes.text}>Множество скинов.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
    );
};

export default Subscribe;