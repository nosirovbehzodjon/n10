import { createSlice } from "@reduxjs/toolkit";
import { getData, setData } from "../../../../service/storage";

const state = {
    value: getData("counter") ?? 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: state,
    reducers: {
        increment: (state) => {
            state.value += 1;
            setData("counter", state.value);
        },
        decrement: (state) => {
            state.value -= 1;
            setData("counter", state.value);
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
