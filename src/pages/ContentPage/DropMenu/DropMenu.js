import React from 'react';
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import FilterHdrOutlinedIcon from "@material-ui/icons/FilterHdrOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import Box from "@material-ui/core/Box";
import DropList from "./DropList/DropList";

const dropMenuStructure = [
    {
        name: "Скины",
        subNames: [
            {
                name: "Обычный",
                icon: <AccountCircleOutlinedIcon color={"secondary"}/>,
            },
            {
                name: "Необычный",
                icon: <InboxIcon color={"secondary"}/>,
            },
            {
                name: "Редкий",
                icon: <DraftsIcon color={"secondary"}/>,
            },
            {
                name: "Эпический",
                icon: <FilterHdrOutlinedIcon color={"secondary"}/>,
            },
            {
                name: "Легендарный",
                icon: <ShoppingCartIcon color={"secondary"}/>,
            },
            {
                name: "Секретный",
                icon: <LoyaltyOutlinedIcon color={"secondary"}/>,
            },
        ],
    },
    {
        name: "Стикеры",
        subNames: [
            {
                name: "Стикеры VK",
                icon: <ShoppingCartIcon color={"secondary"}/>,
            },
            {
                name: "Стикеры Игровые",
                icon: <LoyaltyOutlinedIcon color={"secondary"}/>,
            },
        ],
    },
    {
        name: "Другое",
        subNames: [
            {
                name: "Перчатки",
                icon: <ShoppingCartIcon color={"secondary"}/>,
            },
            {
                name: "Ножи",
                icon: <ShoppingCartIcon color={"secondary"}/>,
            },
            {
                name: "Карты текстур",
                icon: <LoyaltyOutlinedIcon color={"secondary"}/>,
            },
            {
                name: "Оформлений Соц.Сетей",
                icon: <ShoppingCartIcon color={"secondary"}/>,
            },
        ],
    }
]

const DropMenu = () => {
    const theme = useTheme();
    const d_xs = useMediaQuery(theme.breakpoints.down('xs'));
    const d_sm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            component={"Paper"}
            style={{minWidth: "100px", width: "240px"}}
            display={"flex"}
            flexDirection={d_xs && "column"}>
            <List component="nav" aria-label="main mailbox folders" style={{width: "100%"}}>
                {
                    dropMenuStructure.map(item => <DropList dropItem={item} isOpenDefault={true}/>)
                }
            </List>
        </Box>
    );
};

export default DropMenu;