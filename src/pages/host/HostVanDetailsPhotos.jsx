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

export default function HostVanDetailsPhotos(){
    const van = useOutletContext()
    return(
        <img className="host-van-detail-image" src={van.imageUrl} alt="{van.name}" />
    )
}