import React from 'react';
import {makeStyles} from "@material-ui/core";
import {style} from "./Banner.style";
// import Button from "@material-ui/core/Button";
import styles from "./banner.module.css";
import { Button } from 'antd';

let useStyles = makeStyles(() => style)

const Banner = () => {

    const cl = useStyles();

    return (
        <div className={cl.bannerContainer}>
            <div className={cl.textContainer}>
                <h1 className={styles.title}>Magic Of Designers!</h1>
                <p className={styles.subTitle}>У нас вы найдете разнаобразные скины для любымых игр на любой вкус!</p>
            </div>
        </div>
    );
};

export default Banner;