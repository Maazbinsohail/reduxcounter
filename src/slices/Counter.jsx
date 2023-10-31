import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 0}

const CounterSlice = createSlice({
    name: "Kounter",// k sy counter is leye likha hai purany walay counter sy differentiate krny k leye
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = CounterSlice.actions;
export default CounterSlice.reducer