import { Navigate, Route, Routes } from "react-router-dom"
import { List } from './pages/List'
import { Home } from './pages/Home'
import { useAppSelector, useAppDispatch } from "./app/hooks"
import { useEffect } from "react"

export const PrivateRoutes = ()=>{
    const user = useAppSelector((status)=>status.auth)
    const dispatch = useAppDispatch()
    console.log("USER MANEIRO ", user )

    return(
        user.isLogged ?
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/list' element={<List/>} />
        </Routes>
        : <Navigate to="/login"/>
    )
}