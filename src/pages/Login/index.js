import { useState } from "react"
import { logIn } from "../../features/auth/auth-slice"
import { useAppDispatch,useAppSelector } from "../../app/hooks"
import { Navigate, useNavigate } from "react-router-dom"

export const Login = ()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useAppDispatch();
    const user = useAppSelector((state)=> state.auth);
    const history = useNavigate()
    

    function handleSendForm(event){
        event.preventDefault()
        dispatch(logIn({email,password}))
        history('/')
    }

    return(
        <div className="container-login">
            <div className="cont-login">
                <h1>Login</h1>
                <form onSubmit={handleSendForm}>
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    )
}