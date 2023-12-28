import HostHeader from "./HostHeader.jsx"
import { Outlet, redirect } from "react-router-dom";
import { checkAuth } from "../api/auth.js"

export async function loader(){
    const isLoggedIn = checkAuth()
    if(isLoggedIn == false){
        const response = redirect("/login")
        response.body = true
        return response
    }else{
        return null
    }
}

export default function HostLayout(){
    return(
        <div>
            <HostHeader />
            <Outlet />
        </div>
    )
}