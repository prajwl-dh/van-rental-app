import React from "react";
import { Link, useLoaderData, redirect } from "react-router-dom";
import { checkAuth } from "../../api/auth"

export async function loader(){
    const isLoggedIn = checkAuth()
    if(isLoggedIn == false){
        const response = redirect("/login")
        response.body = true
        return response
    }else{
        const response = await fetch('/api/host/vans')
        if(!response){
            throw Error("Failed to fetch /api/host/vans")
        }
        const data = await response.json()
        return data.vans
    }
}

export default function HostVans(){
    const vans = useLoaderData()

    const vansArray = vans.map((van) => {
        return(
            <Link to={`${van.id}`} key={van.id} className="host-van-link-wrapper">
                <div key={van.id} className="host-van-single">
                <img src={van.imageUrl} alt={`Photo of ${van.name}`}></img>
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
            </Link>
        )
    })

    return(
        <div>
            <section>
                <h1 className="host-vans-title">Your Listed Vans</h1>
                <div className="host-van-list">
                    <section>
                        {vansArray}
                    </section>
                </div>
            </section>
        </div>
    )
}