import React from 'react';
import {
    makeStyles, Paper,
    Avatar, Hidden,
    IconButton, Box,
    ButtonGroup, Button
} from "@material-ui/core";
import Navigate from "./NavBar";
import logotype from "../../assets/Logotype.png"
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing(1),
        padding: theme.spacing(1.5),
    },
    logo: {
        width: "48px",
        height: "46px",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    wr_avatar: {
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        marginRight: theme.spacing(1.5),
        transition: "linear 250ms",
        "&:hover": {
            transform: "scale(1.1)"
        },
    },
    avatar: {
        cursor: "pointer",
        width: "100%",
        height: "100%",
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },
    wr_nav_btn: {
        marginLeft: theme.spacing(1.5),
    },
    reg_btnL:{

        borderTopLeftRadius: "2em",
        borderBottomLeftRadius: "2em",
        padding: `${theme.spacing(0.8)}px ${theme.spacing(1.8)}px`,
    },
    reg_btnR:{
        borderTopRightRadius: "2em",
        borderBottomRightRadius: "2em",

        padding: `${theme.spacing(0.8)}px ${theme.spacing(1.8)}px`,
    },
}));

const Header = ({isEntered}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.container} square>
            <Hidden mdUp>
                <Box className={classes.wr_nav_btn}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                    >
                        <MenuIcon/>
                    </IconButton>
                </Box>
            </Hidden>

            <Link to="/"><img className={classes.logo} src={logotype} alt="no"/></Link>

            <Hidden smDown>
                <Navigate/>
                {
                    !isEntered ?
                        <ButtonGroup size={"medium"} color="primary"
                                     aria-label="contained primary button group">
                            <Button className={classes.reg_btnL} variant={"outlined"}>Вход</Button>
                            <Button className={classes.reg_btnR} variant={"contained"}>Регистрация</Button>
                        </ButtonGroup>
                        :
                        <Paper className={classes.wr_avatar}>
                            <Avatar className={classes.avatar} alt="Remy Sharp"
                                    src="https://vanstrydonck.com/wp-content/uploads/2016/11/avatar_circle_2.png"/>
                        </Paper>
                }
            </Hidden>
        </Paper>
    );
};

export default Header;