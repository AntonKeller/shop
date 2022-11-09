import React, {useState} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function getTextIf(text, xs, sm) {
    if (xs || !sm) {
        return text
    } else return ""
}

function getIconIf(bool) {
    return bool ? <ExpandMoreIcon color={"primary"}/> : <ExpandLessIcon/>
}

const DropList = ({dropItem, isOpenDefault = false}) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault)
    return (
        <>
            <ListItem button onClick={() => setIsOpen(!isOpen)}>
                <ListItemIcon>{getIconIf(isOpen)}</ListItemIcon>
                <ListItemText primary={dropItem.name}/>
            </ListItem>
            <Divider/>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                {
                    dropItem.subNames.map(subItem => {
                        return (
                            <ListItem button>
                                <ListItemIcon>{subItem.icon}</ListItemIcon>
                                <ListItemText primary={subItem.name}/>
                            </ListItem>
                        )
                    })
                }
            </Collapse>
        </>
    );
};

export default DropList;