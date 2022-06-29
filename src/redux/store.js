import {configureStore} from "@reduxjs/toolkit"
import expenseReducer from "./expenseSlice.js"
export const store=configureStore({
    reducer:{
        // movie is name of reducer
        expenses:expenseReducer  
    }  
})