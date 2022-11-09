import React from "react"
import ReactDOM from "react-dom"
import Combiner from './Combiner'
import 'antd/dist/antd.css';
import {BrowserRouter} from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {Provider} from "react-redux";
import store from "./store/store";

const outerTheme = createTheme({
    typography: {
        fontFamily: [
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontWeightLight: "bold",
    },
    palette: {
        primary: {
            main: "#2191b9",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#6f807f",
        },
    },
});

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={outerTheme}>
            <Provider store={store}>
                <Combiner/>
            </Provider>
        </ThemeProvider>
    </BrowserRouter>,
    document.querySelector('#root'))