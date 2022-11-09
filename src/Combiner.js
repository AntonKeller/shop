import React from 'react';
import {Container} from "@material-ui/core";
import Header from "./components/header/Header";
import Auth from "./pages/Auth";
import UserPage from "./pages/UserPage/UserPage";
import Subscribe from "./pages/Subscribe";
import ContentPage from "./pages/ContentPage/ContentPage";

import {
    Routes,
    Route,
} from "react-router-dom";
import Box from "@material-ui/core/Box";

const Combiner = () => {
    return (
        <Box style={{backgroundColor: "#ffffff"}}>
            <Container disableGutters={true} maxWidth={"xl"}>
                <Container maxWidth={"xl"} disableGutters={true}>
                    <Header isEntered={false}/>
                </Container>
                <Routes>
                    <Route path="*" element={<ContentPage/>}/>
                    <Route path="/" element={<ContentPage/>}/>
                    <Route path="/Products" element={<ContentPage/>}/>
                    <Route path="/Gallery" element={<Auth/>}/>
                    <Route path="/Discussion" element={<Subscribe/>}/>
                    <Route path="/Subscription" element={<Subscribe/>}/>
                    <Route path="/About" element={<UserPage/>}/>
                </Routes>
            </Container>
        </Box>
    )
}

export default Combiner;