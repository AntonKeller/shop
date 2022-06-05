import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "../card/Card";
import {makeStyles} from "@material-ui/core";
import {style} from "./CardList.style";
import imageCard from "../../../assets/Обложки_Карточка.jpg"

const useStyles = makeStyles(() => style());

const CardList = ({data}) => {
    const cl = useStyles();
    return (
        <>
            {
                data.map(item => {
                    return (
                        <Grid className={cl.gItem} wrap={'wrap'} key={item.id} item xs={12} sm={6} md={4} lg={3}>
                            <Card imageMedia={imageCard} shortDescription={item.shortDescription} />
                        </Grid>
                    )
                })
            }
        </>
    );
};

export default CardList;