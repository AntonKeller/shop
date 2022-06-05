import React from 'react';
import { Grid }  from "@material-ui/core";
import CardList from "./cardList/CardList";
import { globalData } from "../../data/data";

const Gallery = () => {

    return (
        <Grid container spacing={4}>
            <CardList data={globalData.galleryCardImages}/>
        </Grid>
    );
};

export default Gallery;