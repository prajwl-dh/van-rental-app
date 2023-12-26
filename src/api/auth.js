import { redirect } from "react-router-dom"

export function checkAuth(){
    const isAuthienticated = localStorage.getItem("isAuthienticated")
    if(isAuthienticated == "true"){
        const isLoggedIn = true
        return isLoggedIn
    }else{
        const isLoggedIn = false
        return isLoggedIn
    }
}

export function authienticate(email, password){
    if(email === "demo@demo.com" && password === "p123"){
        localStorage.setItem("isAuthienticated", "true")
        return true
    }else{
        return false
    }
}