import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './faetures/cartSlice'


export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})