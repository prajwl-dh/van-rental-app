import { useOutletContext, redirect } from "react-router-dom";
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

export default function HostVanDetailsInfo(){
    const van = useOutletContext()
    return(
        <section className="host-van-detail-info">
            <h4>Name: <span>{van.name}</span></h4>
            <h4>Category: <span>{van.type}</span></h4>
            <h4>Description: <span>{van.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}