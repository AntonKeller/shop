import React, {useEffect} from 'react';
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const tabNames = [
    {
        ruName: "Аккаунт",
        enName: "Account",
    },
    {
        ruName: "Друзья",
        enName: "Friends",
    },
    {
        ruName: "Сообщения",
        enName: "Messages",
    },
    {
        ruName: "Мои работы",
        enName: "Works",
    },
    {
        ruName: "Покупки",
        enName: "Purchased",
    },
    {
        ruName: "Подписки",
        enName: "Subscriptions",
    },
];

const Tabs = ({setSubPageName}) => {
    return (
        <List style={{width: "180px", borderRight: "1px solid red"}} component="nav" aria-label="main mailbox folders">
            <Typography color={"primary"} style={{fontWeight: "bold",padding: "4px"}}>
                Навигация
            </Typography>
            {
                tabNames.map(item => {
                    return (
                        <div key={item.enName}>
                            <ListItem button onClick={() => {
                                setSubPageName(item.enName)
                            }}>
                                <ListItemText primary={item.ruName}/>
                            </ListItem>
                            <Divider/>
                        </div>
                    )
                })
            }
        </List>
    );
};

export default Tabs;