import React from "react"
import { Link, useSearchParams, useLoaderData } from "react-router-dom"

export async function loader(){
    const response = await fetch('/api/vans')
    const data = await response.json()
    return data.vans
}

export default function Vans(){
    const [searchParams, setSearchParams] = useSearchParams()
    const filterType = searchParams.get("type")
    const vans = useLoaderData()
    const filteredVans = filterType == null ? vans : vans.filter((van) => van.type == filterType)

    const vansArray = filteredVans.map((van) => (
        <div key={van.id} className="van-tile">
            <Link to={`${van.id}`} state={{type: filterType}}>
                <img src={van.imageUrl}></img>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function filterButtonsClick(type,category){
        setSearchParams((prev) => {
            if(category === "clear"){
                prev.delete(type)
            }else{
                prev.set(type,category)
            }
            return prev
        })
    }

    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => filterButtonsClick("type", "simple")} className={`van-type simple ${filterType == "simple" ? "selected" : null}`}>Simple</button>
                <button onClick={() => filterButtonsClick("type", "luxury")} className={`van-type luxury ${filterType == "luxury" ? "selected" : null}`}>Luxury</button>
                <button onClick={() => filterButtonsClick("type", "rugged")} className={`van-type rugged ${filterType == "rugged" ? "selected" : null}`}>Rugged</button>
                <button onClick={() => filterButtonsClick("type", "clear")} className={`van-type clear-filters`}>Clear Filters</button>
            </div>
            <div className="van-list">
                {vansArray}
            </div>
        </div>
    )
}