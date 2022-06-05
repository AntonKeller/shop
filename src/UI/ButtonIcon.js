import React from 'react';
import IconButton from "@material-ui/core/IconButton";

const ButtonIcon = ({iconComponent, ...props}) => <IconButton {...props}>{iconComponent}</IconButton>;

export default ButtonIcon;