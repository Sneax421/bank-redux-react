import {createSlice} from "@reduxjs/toolkit";



const accountSlice = createSlice({
    name: "account",
    initialState: 0,
    reducers: {
        deposit: (state, action) => state += action.payload,
        withdraw: (state, action) => state < action.payload ? state : state - action.payload
    }
})


export default accountSlice.reducer;
export const {deposit, withdraw} = accountSlice.actions;
