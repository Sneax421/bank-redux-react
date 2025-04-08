import {configureStore} from "@reduxjs/toolkit";
import account from '../features/account/accountSlice.js'

export const store = configureStore({
    reducer: {
        account
    }
})