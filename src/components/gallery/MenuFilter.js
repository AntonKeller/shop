import React from 'react';
import {Button, makeStyles} from "@material-ui/core";

const filterButtons = ["Все","KUBOOM", "POLYWAR", "Fan Of Guns"]

const useStyles = makeStyles((theme) => ({
    filter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: theme.spacing(2),
        "& > *":{
            marginRight: theme.spacing(1),
        },
    },
}));

const MenuFilter = () => {

    const classes = useStyles();

    return (
        <div className={classes.filter}>
            {
                filterButtons.map(
                    name => <Button variant={"text"} key={name} size={"small"}>{name}</Button>
                )
            }
        </div>
    );
};

export default MenuFilter;