import React from 'react';
import MyCor from "../../components/carousel/MyCor";
import MenuFilter from "../../components/gallery/MenuFilter";
import Gallery from "../../components/gallery/Gallery";
import {makeStyles, useTheme, Hidden, Paper} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DropMenu from "./DropMenu/DropMenu";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        border: "1px dashed black",
    },
    wr_gallery: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        paddingTop: theme.spacing(0.5),
        padding: theme.spacing(4)
    },
    wr_leftMenu: {
        marginRight: theme.spacing(1),
    },
    content_menu: {
        width: "100%",
        border: "1px dashed black",
        background: "#81b8dc",
    },
    user_head: {},
    user_info: {},
}));

const ContentPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const d_xs = useMediaQuery(theme.breakpoints.down('xs'));
    const d_sm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Hidden smDown>
                <MyCor/>
            </Hidden>

            <MenuFilter/>

            <Box className={classes.wr_gallery} style={{flexDirection: d_xs && "column"}}>
                <Paper elevation={4} className={classes.wr_leftMenu}
                       style={{marginRight: d_xs && "0px", marginBottom: d_xs && "10px"}}>
                    <DropMenu />
                </Paper>

                <Gallery/>
            </Box>

        </>
    );
};

export default ContentPage;
