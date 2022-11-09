import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers:{
        inc: state => {
            state.counter +=1
        },
        dec: state => {
            state.counter -=1
        },
    }
})

export const counterSelector = {
    getCounter: state => state.counter
}

export const {inc, dec} = counterSlice.actions

export default counterSlice
