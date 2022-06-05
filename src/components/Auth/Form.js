import React from 'react';
import { Input, Button, Checkbox } from 'antd';
import styles from "./form.module.css"

const Form = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>

                <label htmlFor="">Введите имя:</label>
                <Input size={"large"}/>
                <label htmlFor="">Введите пароль:</label>
                <Input size={"large"}/>
                <Button className={styles.button} size={"large"}>Войти</Button>
                <Checkbox>Запомнить</Checkbox>

            </form>
        </div>
    );
};

export default Form;