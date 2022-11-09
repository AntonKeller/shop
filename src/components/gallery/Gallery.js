import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import {globalData} from "../../data/data";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
    card: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
    },
}));


const Gallery = () => {

    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            {
                globalData.galleryCardImages.map(item => {
                    return (
                        <Grid
                            key={item.id}
                            className={classes.card} wrap={'wrap'}
                            item xs={12} sm={6} md={4} lg={3}
                        >
                            <Card shortDescription={item.shortDescription}/>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
};

export default Gallery;