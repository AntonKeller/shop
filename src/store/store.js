import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlices";

const store = configureStore({
    reducer: counterSlice.reducer,
})

export default store;