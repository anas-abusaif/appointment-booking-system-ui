import { createContext, useContext, useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const baseURL = "http://localhost:3000/";
const tokenURL = `${baseURL}api/login`

const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext)
    if (!auth) return("Please use this context in a descendent of the AuthProvider")
    return auth
}

export function AuthProvider(props) {
    const [state,setState] = useState({
        tokens: null,
        user:null,
        login,
        logout,
    });
    useEffect(()=>{
        let token = JSON.parse(localStorage.getItem('token'))
        if (token){
            const decodeAccess = jwt.decode(token.access);
            const newState = {
                tokens:token,
                user:{
                    username: decodeAccess.username,
                    email: decodeAccess.email,
                    id: decodeAccess.user_id,
                }
            }
            setState((prevState)=>({...prevState, ...newState}))
        }
        
    },[])
    async function login(username,password) {
        
        try{
            const response = await axios.post(tokenURL,{username,password});
            const decodeAccess = jwt.decode(response.headers.token);
            localStorage.setItem('token', JSON.stringify(response.data))
            const newState = {
                tokens:response.data,
                user:{
                    username: decodeAccess.username,
                    email: decodeAccess.email,
                    id: decodeAccess.user_id,
                }
            }
            setState((prevState)=>({...prevState, ...newState}))
        }
        catch(error){
            console.log(error);

        }
    }
    function logout() {
        localStorage.clear()
        const newState = {
            tokens:null,
            user:null
        }
        setState((prevState)=>({...prevState, ...newState}))
    }
    return(
        <AuthContext.Provider value={state}>
            {
                props.children
            }    
        </AuthContext.Provider>
    )
}