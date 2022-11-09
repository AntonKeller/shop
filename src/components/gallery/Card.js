import React, {Suspense, useEffect, useState} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Typography from "@material-ui/core/Typography";
import {makeStyles, Paper} from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

const views = 7500;
const likes = 3250;

const useStyles = makeStyles((theme) => ({
    box: {
        width: "100%",
    },

    wr_info: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 4px",
    },

    wr_img: {
        paddingBottom: "71%",
        position: "relative",
        overflow: "hidden",
    },

    preloader: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    img: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },

    info: {
        display: "flex",
        alignItems: "center",
    },
}));

const getDisplayIf = bool => bool ? "none" : "block";
const defaultUrlImage = "https://img3.goodfon.ru/original/2100x1313/8/30/kananaskis-alberta-kanada-2900.jpg";

const Card = ({pUrl = defaultUrlImage, displayDelay = 1000}) => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className={classes.box}>
            <Paper className={classes.wr_img} elevation={4} style={{background: "#d7e8ff"}} square>
                <Skeleton className={classes.preloader}
                          animation="wave"
                          variant="rect"
                          style={{display: getDisplayIf(!isLoading)}}/>
                <img className={classes.img}
                     src={pUrl}
                     style={{display: getDisplayIf(isLoading)}}
                     onLoad={() => {
                         setInterval(() => {
                             setIsLoading(!isLoading)
                         }, displayDelay)
                     }}/>
            </Paper>

            <div className={classes.wr_info}>
                <div className={classes.info}>
                    {
                        isLoading ? (
                            <Skeleton animation="wave" variant="text" width={"80px"}/>
                        ) : (
                            <>
                                <VisibilityIcon color={"secondary"} fontSize={"small"}/>
                                <Typography color={"secondary"}>{views / 1000}k</Typography>
                            </>
                        )
                    }
                </div>
                <div className={classes.info}>
                    {
                        isLoading ? (
                            <Skeleton animation="wave" variant="text" width={"80px"}/>
                        ) : (
                            <>
                                <FavoriteIcon color={"secondary"} fontSize={"small"}/>
                                <Typography color={"secondary"}>{likes / 1000}k</Typography>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;