import React, {useState} from 'react';
import {makeStyles, Paper, Button, Avatar, Typography, Divider} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        border: "1px dashed black",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "800px"
    },
    left_panel: {
        position: "sticky",
        width: "200px",
        background: "#d3d3e7",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    },
    left_button: {
        padding: theme.spacing(1),
        textAlign: "left",
        fontSize: "12px",
    },
    content_wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "stretch",
        width: "100%"
    },
}));

const messagePanel = (names) => {
    return (
        <>
            {
                names.map(name => {
                    return (
                        <>
                            <div style={{padding: "15px 10px"}}>
                                <div style={{
                                    // border: "1px dashed grey",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "left",
                                    alignItems: "center"
                                }}>
                                    <Avatar style={{marginRight: "10px"}}>А</Avatar>
                                    <Typography>{name}</Typography>
                                </div>
                            </div>
                            <Divider/>
                        </>
                    )
                })
            }
        </>
    )
}

const getUserPanel = (num) => {
    switch (num) {
        case 1:
            return messagePanel(userNames)
            break;
        case 2:
            break;
        case 3:
            break;
        default:
            //Здесь находятся инструкции, которые выполняются при отсутствии соответствующего значения
            break;
    }
}

const buttonNames = ["Аккаунт", "Друзья", "Сообщения", "Мои работы", "Покупки", "Подписки"]
const userNames = ["Иванов А.С.", "Петров А.С.", "Сидоров А.С.", "Петров А.С.", "Сидоров А.С.", "Петров А.С.", "Сидоров А.С.",
    "Петров А.С.", "Сидоров А.С.", "Петров А.С.", "Сидоров А.С.", "Петров А.С.", "Сидоров А.С.", "Петров А.С.", "Сидоров А.С.",
    "Петров А.С.", "Сидоров А.С.", "Петров А.С.", "Сидоров А.С.", "Петров А.С.", "Сидоров А.С.", "Петров А.С.", "Сидоров А.С.", "Петров А.С."]

const myButton = (mName, mIndex, mHandle, mClass, currentActivePanel) => {
    const index = mIndex;
    return (
        <Button
            key = {mIndex}
            onClick={mHandle}
            className={mClass}
            variant={currentActivePanel == mIndex ? "contained" : "text"}
            color={currentActivePanel == mIndex ? "secondary" : "default"}
            style={{
                transition: "0.22s linear",
                borderRight: currentActivePanel == mIndex ? "4px solid #ffffff" : "0px solid #ffffff",
                borderLeft: currentActivePanel == mIndex ? "4px solid #ffffff" : "0px solid #ffffff",
            }}
        >
            {mName}
        </Button>
    )
}


const UserMenuTabs = () => {
    const classes = useStyles();

    const [activePanel, setActivePanel] = useState(1)

    return (
        <div className={classes.container}>

            <div elevation={0} className={classes.left_panel}>
                {
                    buttonNames.map((item, index) => {
                        return myButton(item, index + 1, () => {
                            setActivePanel(index + 1)
                        }, classes.left_button, activePanel)
                    })
                }
            </div>

            <Paper elevation={0} className={classes.content_wrapper}>
                {
                    getUserPanel(activePanel)
                }
            </Paper>
        </div>
    );
};

export default UserMenuTabs;