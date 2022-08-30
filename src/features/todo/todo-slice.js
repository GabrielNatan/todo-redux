import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const counterSlice = createSlice({
    name:'list',
    initialState,
    reducers:{
        addTask(state,action){
            state.value = [...state.value,action.payload]
        },
        deleteTask(state,action){
            console.log("action ==> ",action.payload)
            state.value = action.payload
        }
    }
})


export const {addTask,deleteTask} = counterSlice.actions
export default counterSlice.reducer;