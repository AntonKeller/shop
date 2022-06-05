import React from 'react';
import {Carousel} from 'antd';
import styles from "./cor.module.css"

const MyCor = () => {

    return (
        <Carousel style={{marginBottom:"20px"}}>
            <div>
                <div className={[styles.carousel_item, styles.item_one].join(' ')}>
                    Magic Of Designers!
                </div>
            </div>
            <div>
                <div className={[styles.carousel_item, styles.item_two].join(' ')}>
                    Magic Of Designers!
                </div>
            </div>
            <div>
                <div className={[styles.carousel_item, styles.item_three].join(' ')}>
                    Magic Of Designers!
                </div>
            </div>
            <div>
                <div className={[styles.carousel_item, styles.item_four].join(' ')}>
                    Magic Of Designers!
                </div>
            </div>
        </Carousel>
    );
};

export default MyCor;