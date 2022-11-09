import React from 'react';
import {Button, makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";

const filterButtons = ["Все", "KUBOOM", "POLYWAR", "Fan Of Guns"]

const useStyles = makeStyles((theme) => ({
    container: {
        padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
        margin: `${theme.spacing(1)}px 0px`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& > *": {
            marginRight: theme.spacing(2),
        },
        "& :last-child": {
            marginRight: 0,
        },
    },
    chip: {
        marginRight: theme.spacing(1.5),
    },

    root: {
        borderBottom: "1px solid grey",
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        width: 350,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 8,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    wr_nav_btn: {
        marginLeft: theme.spacing(1.5),
    },
}));

const MenuFilter = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.container} variant="outlined">

            <Hidden smDown>
                <Box>
                    {
                        filterButtons.map(
                            name => <Chip className={classes.chip} key={name} label={name} color={"primary"}
                                           component={Button} href="#chip" clickable />
                        )
                    }

                </Box>
            </Hidden>

            <Paper component="form" className={classes.root} elevation={0}>
                <InputBase
                    className={classes.input}
                    placeholder="Поиск"
                    inputProps={{'aria-label': 'Поиск'}}
                />
                <IconButton type="button" className={classes.iconButton}>
                    <SearchIcon/>
                </IconButton>
                <Divider className={classes.divider} orientation="vertical"/>
                <IconButton color="text" className={classes.iconButton} aria-label="directions">
                    <CloseIcon onClick={() => {
                    }}/>
                </IconButton>
            </Paper>
        </Paper>
    );
};

export default MenuFilter;