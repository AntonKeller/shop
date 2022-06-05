import React from 'react';
import Form from "../components/Auth/Form";
import styles from "./Auth.module.css"


const Auth = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.banner}>
                © Все права защищены Magic of Designers
            </div>
            <div className={styles.container_menu}>
                <Form />
            </div>
        </div>
    );
};

export default Auth;