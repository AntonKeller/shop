import React from 'react';
import {Container, Grid, makeStyles, Button} from "@material-ui/core";
import CardList from "./cardList/CardList";
import {globalData} from "../../data/data";
import {style} from "./gallery.style";

const Gallery = () => {

    const classes = makeStyles(() => style)();

    return (
        <Grid container spacing={4}>
            <CardList data={globalData.galleryCardImages}/>
        </Grid>
    );
};

export default Gallery;