import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/todo/todo-slice';
import authReducer from '../features/auth/auth-slice';



export const store = configureStore({
    reducer: {
        list:counterReducer,
        auth:authReducer
    }
})

