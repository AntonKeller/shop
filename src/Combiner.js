import React from 'react';
import {Container} from "@material-ui/core";
import Header from "./components/header/Header";
import Gallery from "./components/gallery/Gallery";
import MenuFilter from "./components/gallery/MenuFilter";
import MyCor from "./components/carousel/MyCor";
import Auth from "./pages/Auth";

const Combiner = () => {
    return (
        <Container disableGutters={true} maxWidth={"xl"}>

            <Container maxWidth={"xl"}>
                <Header/>
            </Container>

            <Container maxWidth={"xl"}>
                <MyCor/>
                <MenuFilter/>
                <Gallery/>
            </Container>

            <Auth />
        </Container>
    )
}

export default Combiner;