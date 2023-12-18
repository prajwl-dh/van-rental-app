import React from "react";
import { Link } from "react-router-dom";

export default function HostVans(){
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        async function fetchHostVans(){
            const response = await fetch('/api/host/vans')
            const data = await response.json()
            setVans((prev) => {
                return data.vans
            })
        }
        fetchHostVans()
    },[])

    const vansArray = vans.map((van) => {
        return(
            <Link to="" key={van.id} className="host-van-link-wrapper">
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