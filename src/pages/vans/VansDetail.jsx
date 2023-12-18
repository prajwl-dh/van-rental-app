import React from "react"
import { Link, useParams } from "react-router-dom"

export default function VansDetail(){
    const param = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        async function getVanDetail(){
            const response = await fetch(`/api/vans/${param.id}`)
            const data = await response.json()
            setVan((prev) => {
                return data.vans
            })
        }
        getVanDetail()
    },[])

    return(
        van ?
        <div className="van-detail-container">
            <div className="back-button">
                <Link to="../vans">&larr; <span>Back to All Vans</span></Link>
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
        :
        <h1>Loading...</h1>
    )
}