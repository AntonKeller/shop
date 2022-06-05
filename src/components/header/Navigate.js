import React from 'react';
import { Tabs, Tab } from '@material-ui/core';

const Navigate = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="Товары"/>
            <Tab label="Галерея"/>
            <Tab label="Обсуждение"/>
            <Tab label="О нас"/>
        </Tabs>
    );
};

export default Navigate;
