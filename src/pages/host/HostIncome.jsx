import { redirect } from "react-router-dom";
import { checkAuth } from "../../api/auth"
import graph from '../../assets/images/income-graph.png'

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

export default function HostIncome(){
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return (
        <section className="host-income">
            <h1>Income</h1>
            <p>
                Last <span>30 days</span>
            </p>
            <h2>$2,260</h2>
            <img
                className="graph"
                src={graph}
                alt="Income graph"
            />
            <div className="info-header">
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}