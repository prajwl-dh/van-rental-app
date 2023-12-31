import { Suspense } from "react"
import { Link, useLocation, useLoaderData, Await, defer, useNavigate } from "react-router-dom"
import LoadingAnimation from '../../components/LoadingAnimation'

export async function loader({ params }){
    async function loadVansDetail(){
        const response = await fetch(`/api/vans/${params.id}`)
        if(!response){
            throw Error("Failed to fetch /api/vans detail")
        }
        const data = await response.json()
        return data.vans
    }
    return defer({van: loadVansDetail() })
}

export default function VansDetail(){
    const vanPromise = useLoaderData()
    const location = useLocation().state
    const navigate = useNavigate()

    function renderVanDetails(van){
        return(
            <div className="van-detail">
                <img src={van.imageUrl}></img>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button" onClick={() => navigate(`rent?id=${van.id}`)}>Rent this van</button>
            </div>
        )
    }

    return(
        <div className="van-detail-container">
            <div className="back-button">
                <Link to={`../vans${location.type ? `?type=${location.type}` : ""}`}>&larr; <span>Back to {location.type ? location.type : "all"} vans</span></Link>
            </div>
            <Suspense fallback={<LoadingAnimation />}>
                <Await resolve={vanPromise.van}>
                    {renderVanDetails}
                </Await>
            </Suspense>
        </div>
    )
}