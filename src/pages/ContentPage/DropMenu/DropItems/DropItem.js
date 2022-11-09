import React, {useState} from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const DropItem = ({name = "noName", icon, sendOpenStatus, isOpenDefault = false}) => {

    const [isOpen, setIsOpen] = useState(isOpenDefault)

    return (
        <ListItem button onClick={() => {
            sendOpenStatus(!isOpen)
            setIsOpen(!isOpen)
        }}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name}/>
        </ListItem>
    );
};

export default DropItem;