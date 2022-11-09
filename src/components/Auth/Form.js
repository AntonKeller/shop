import React, {useState} from 'react';
import {TextField, Typography, Switch, Button, makeStyles} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import {AccountCircle, Visibility, VisibilityOff} from "@material-ui/icons";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    form: {
        borderRadius: "1.2rem",
        marginBottom: "76%",
        padding: `${theme.spacing(4)}px ${theme.spacing(14)}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        transition: "850ms",
        "& > *":{
            marginBottom: theme.spacing(2),
        },
    },
    actionButton: {
        width: "100%",
    },
    switchContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
}));

const Form = () => {

    let [showPass, setShowPass] = useState(false)

    const classes = useStyles();

    return (
        <form className={classes.form}>
            <TextField id="input-with-icon-textfield"
                       label="Ваше Имя"
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <AccountCircle color={"primary"} />
                               </InputAdornment>
                           ),
                       }}
            />
            <Input
                id="standard-adornment-password"
                type={showPass ? 'text' : 'password'}
                inputProps={{
                    'aria-label': 'weight',
                }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            size={"small"}
                            label="Ваше Имя"

                            onClick={()=>setShowPass(!showPass)}
                        >
                            {showPass ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <Button color={"primary"} variant={"contained"}>Войти</Button>

            <div className={classes.switchContainer}>
                <Switch
                    checked={false}
                    color="primary"
                    name="showPassword"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Typography >Запомнить</Typography>
            </div>
        </form>
    );
};

export default Form;