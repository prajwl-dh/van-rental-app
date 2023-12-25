import React from "react"
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"

export async function loader({ params }){
    const response = await fetch(`/api/vans/${params.id}`)
    const data = await response.json()
    return data.vans
}

export default function VansDetail(){
    const van = useLoaderData()
    const location = useLocation().state


    return(
        <div className="van-detail-container">
            <div className="back-button">
                <Link to={`../vans${location.type ? `?type=${location.type}` : ""}`}>&larr; <span>Back to {location.type ? location.type : "all"} vans</span></Link>
            </div>
            <div className="van-detail">
                <img src={van.imageUrl}></img>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        </div>
    )
}