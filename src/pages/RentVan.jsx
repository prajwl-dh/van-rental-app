import { Suspense } from "react"
import { useLoaderData, defer, Await, Link } from "react-router-dom"

export async function loader({ params }){
    async function fetchVanDetail(){
        const response = await fetch(`/api/vans/${params.id}`)
        const data = await response.json()
        return data.vans
    }
    return defer({van: fetchVanDetail()})
}

export default function RentVan(){
    const vanPromise = useLoaderData()

    const today = new Date().toLocaleString('en-US',{weekday:'short',day:'2-digit',month:'short',year:'numeric',hour12:false,hour:'2-digit',minute:'2-digit',second:'2-digit',timeZoneName:'short'});

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(10, 0, 0, 0);
    const tomorrowFormatted = tomorrow.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10);
    futureDate.setHours(15, 0, 0, 0);
    const futureDateFormatted = futureDate.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });

    function renderVan(van){
        return(
            <div className="rent-details">
                <p>Thank you for choosing our van rental service!
                    Your order has been confirmed.</p>
                <h2>Order Summary:</h2>
                <div className="details-container">
                    <img src={van.imageUrl}/>
                    <div className="details">
                        <span><b>Name: </b> {van.name}</span>
                        <span><b>Type: </b> {van.type}</span>
                        <span><b>Amount Paid: $</b>{van.price}/day</span>
                        <span><b>Date Paid: </b>{today}</span>
                        <span><b>Pickup Location: </b> Dallas, TX</span>
                        <span><b>Return Location: </b> Dallas, TX</span>
                        <span><b>Pickup Date and Time: </b> {tomorrowFormatted}</span>
                        <span><b>Return Date and Time: </b> {futureDateFormatted}</span>
                    </div>
                </div>
                <p>Thank you for choosing our van rental service. Safe travels!</p>
                <div className="back-button">
                    <Link to={'/'}>&larr; Back to home page</Link>
                </div>
            </div>
        )
    }
    return(
        <div className="rent-container">
            <h1>Order Confirmation</h1>
            <Suspense fallback={<></>}>
                <Await resolve={vanPromise.van}>
                    {renderVan}
                </Await>
            </Suspense>
        </div>
    )
}