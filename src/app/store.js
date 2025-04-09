import {configureStore} from "@reduxjs/toolkit";
import balance from '../features/account/accountSlice.js'

export const store = configureStore({
    reducer: {
        balance
    }
})