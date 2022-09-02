import {createSlice } from '@reduxjs/toolkit'


const initialState = {
    email:'legal@mais.com',
    password:'password',
    data: ''
}


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logIn(state,action){
            console.log("action ==> ",action.payload)
        },
        logOut(state,action){

        }
    }
})


export const { logIn } = authSlice.actions;
export default authSlice.reducer;