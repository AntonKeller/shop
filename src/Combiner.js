import React from 'react';
import { Container } from "@material-ui/core";
import Header from "./components/header/Header";
import Gallery from "./components/gallery/Gallery";
import FilterMenu from "./components/gallery/FilterMenu";
import MyCor from "./components/carousel/MyCor";
import styles from "./combiner.module.css"
import Auth from "./pages/Auth";

const Combiner = () => {
    return (
        <Container disableGutters={true} className={styles.container} maxWidth={"xl"}>
            <Header/>

            <Container className={styles.container} maxWidth={"xl"}>
                <MyCor/>
                <Gallery/>
            </Container>
            {/*<Auth />*/}


            {/*<FilterMenu/>*/}

        </Container>
    )
}

export default Combiner;