import { Suspense } from "react";
import { Link, useLoaderData, redirect, defer, Await } from "react-router-dom";
import { checkAuth } from "../../api/auth"
import LoadingAnimation from '../../components/LoadingAnimation'

export async function loader(){
    const isLoggedIn = checkAuth()
    async function fetchVans(){
        const response = await fetch('/api/host/vans')
        if(!response){
            throw Error("Failed to fetch /api/host/vans")
        }
        const data = await response.json()
        return data.vans
    }
    if(isLoggedIn == false){
        const response = redirect("/login")
        response.body = true
        return response
    }else{
        return defer({vans: fetchVans()})
    }
}

export default function HostVans(){
    const vansPromise = useLoaderData()

    function renderHostVans(vans){
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
            <div className="host-van-list">
                <section>
                    {vansArray}
                </section>
            </div>
        )
    }

    return(
        <div>
            <section>
                <h1 className="host-vans-title">Your Listed Vans</h1>
                <Suspense fallback={<LoadingAnimation />}>
                    <Await resolve={vansPromise.vans}>
                        {renderHostVans}
                    </Await>
                </Suspense>
            </section>
        </div>
    )
}