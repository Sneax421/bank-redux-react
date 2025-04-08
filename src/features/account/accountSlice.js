import {createSlice} from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        balance: 0,
    },
    reducers: {
        deposit: (state, action) => {
            state.balance += action.payload;
        },
        withdraw: (state, action) => {
            state.balance = state.balance < action.payload ? state.balance : state.balance - action.payload;
        }
    }
})


export default accountSlice.reducer;
export const {deposit, withdraw} = accountSlice.actions;
