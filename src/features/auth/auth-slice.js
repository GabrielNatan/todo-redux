import { createSlice } from '@reduxjs/toolkit'
import { login } from '../../login-api'

const initialState = {
    isLogged:document.cookie.includes("token") ? true : false,
    email:'email',
    password:'',
    user: {}
}


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logIn(state,action){
            let { email, password } = action.payload
            state.email = email
            state.password = password
            state.isLogged = true
            state.user = {name:"Rei", lastName:"Pelé"}
            login(email, password)
        },
        logOut(state,action){

        }
    }
})


export const { logIn } = authSlice.actions;
export default authSlice.reducer;