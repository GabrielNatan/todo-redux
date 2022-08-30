import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/todo/todo-slice';



export const store = configureStore({
    reducer: {
        list:counterReducer
    }
})

