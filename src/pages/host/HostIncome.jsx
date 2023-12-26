import React from "react";
import { redirect } from "react-router-dom";
import { checkAuth } from "../../api/auth"

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

export default function HostIncome(){
    return(
        <div>
            <br />
            <br />
            <h3>   Work In Progress!</h3>
        </div>
    )
}