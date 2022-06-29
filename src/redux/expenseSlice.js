import { createSlice } from "@reduxjs/toolkit";
// thunk is a middleware used for running async dispatches (i guess)
const initialState = {
    expenseList: localStorage.getItem('expenseList')?JSON.parse(localStorage.getItem('expenseList')):[] ,
    query:""
}
const expenseSlice = createSlice({
    name: "expenses",//name of slice
    initialState,
    reducers: {
        // attaching actions with reducers
        addExpense: (state, { payload }) => {
            state.expenseList = [...state.expenseList,payload];
            localStorage.setItem('expenseList',JSON.stringify(state.expenseList))
        },
        removeExpense:(state,{payload})=>{
            // payload will contain title of expense 
            state.expenseList=state.expenseList.filter((item)=>{
                return payload!==item.title
            })
            localStorage.setItem('expenseList',JSON.stringify(state.expenseList))
        },
        searchExpense:(state,{payload})=>{
            // adding query in state
            state.query=payload;
        }
    },
    
})
// exporting only an action
export const { addExpense,searchExpense,removeExpense } = expenseSlice.actions
export default expenseSlice.reducer
