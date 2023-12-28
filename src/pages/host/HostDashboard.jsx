import { redirect, Link } from "react-router-dom";
import { checkAuth } from "../../api/auth"
import { BsStarFill } from "react-icons/bs"

export async function loader(){
    const isLoggedIn = checkAuth()
    if(isLoggedIn == false){
        const response = redirect("/login")
        response.body = true
        return response
    }else{
        return null
    }
}

export default function HostDashboard(){
    return(
        <div>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>
                <BsStarFill className="star" />
                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="review">Details</Link>
            </section>
            <section className="host-dashboard-vans">
                <h2>Your Vans</h2>
                <p>
                    <span></span>
                </p>
                <Link to="vans">View your vans</Link>
            </section>
        </div>
    )
}