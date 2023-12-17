import React from "react"
import { Link } from "react-router-dom"

export default function Vans(){
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        async function getVans(){
            const response = await fetch('/api/vans')
            const data = await response.json()
            setVans((prev) => {
                return data.vans
            })
        }
        getVans()
    }, [])

    const vansArray = vans.map((van) => (
        <div key={van.id} className="van-tile">
            <Link to={`${van.id}`}>
                <img src={van.imageUrl}></img>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vansArray.length > 0? vansArray : <h1>Loading...</h1>}
            </div>
        </div>
    )
}