import React from "react";
import { Link, Outlet, useLoaderData, useParams, redirect } from "react-router-dom";
import HostVanDetailsHeader from "../../components/HostVanDetailsHeader.jsx"
import { checkAuth } from "../../api/auth.js"

export async function loader({ params }){
    const isLoggedIn = checkAuth()
    if(isLoggedIn == false){
        const response = redirect("/login")
        response.body = true
        return response
    }else{
        const response = await fetch(`/api/host/vans/${params.id}`)
        if(!response){
            throw Error("Failed to fetch /api/host/vans details")
        }
        const data = await response.json()
        return data.vans
    }
}

export default function HostVansDetails(){
    const params = useParams()
    const van = useLoaderData()

    return(
        <section>
            <div className="back-to-host-van">
                <Link to=".." relative="path">&larr; <span>Back to all vans</span></Link>
            </div>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${van.type}`}>{van.type}</i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                <HostVanDetailsHeader />
                <Outlet context={van} />
            </div>
        </section>
    )
}