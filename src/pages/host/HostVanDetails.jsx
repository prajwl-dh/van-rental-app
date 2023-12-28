import { Suspense } from "react";
import { Link, Outlet, useLoaderData, redirect, defer, Await } from "react-router-dom";
import HostVanDetailsHeader from "../../components/HostVanDetailsHeader.jsx"
import { checkAuth } from "../../api/auth.js"

export async function loader({ params }){
    const isLoggedIn = checkAuth()
    async function fetchHostVanDetail(){
        const response = await fetch(`/api/host/vans/${params.id}`)
        if(!response){
            throw Error("Failed to fetch /api/host/vans details")
        }
        const data = await response.json()
        return data.vans
    }
    if(isLoggedIn == false){
        const response = redirect("/login")
        response.body = true
        return response
    }else{
        return defer({van: fetchHostVanDetail()})
    }
}

export default function HostVansDetails(){
    const vanPromise = useLoaderData()

    function renderHostVanDetail(van){
        return(
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
        )
    }

    return(
        <section>
            <div className="back-to-host-van">
                <Link to=".." relative="path">&larr; <span>Back to all vans</span></Link>
            </div>
            <Suspense fallback={<h2>Loading Van...</h2>}>
                <Await resolve={vanPromise.van}>
                    {renderHostVanDetail}
                </Await>
            </Suspense>
        </section>
    )
}