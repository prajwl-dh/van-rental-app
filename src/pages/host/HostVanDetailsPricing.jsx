import { useOutletContext, redirect } from "react-router-dom"
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

export default function HostVanDetailsPricing(){
    const van = useOutletContext()
    return(
        <h3 className="host-van-price">${van.price}<span>/day</span></h3>
    )
}