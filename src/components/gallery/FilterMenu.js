import React from 'react';
import {globalData} from "../../data/data";
import {Button, makeStyles} from "@material-ui/core";
import {style} from "./filterMenu.style";

const FilterMenu = () => {

    const cl = makeStyles(() => style)();

    return (
        <div className={cl.filterMenu}>
            {
                globalData.galleryFilterButtonNames.map(name => <Button key={name} className={cl.filterButton} size={"small"}>{name}</Button>)
            }
        </div>
    );
};

export default FilterMenu;