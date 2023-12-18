import React from "react"
import { NavLink } from "react-router-dom"

export default function HostHeader(){
    const activeStyle = {
        textDecoration : "underline",
        fontWeight : "bold",
        color : "#161616"
    }
    return(
        <nav className="host-nav">
            <NavLink to="." end style={({isActive}) => isActive? activeStyle : null}>Dashboard</NavLink>
            <NavLink to="income" style={({isActive}) => isActive? activeStyle : null}>Income</NavLink>
            <NavLink to="vans" style={({isActive}) => isActive? activeStyle : null}>Vans</NavLink>
            <NavLink to="review" style={({isActive}) => isActive? activeStyle : null}>Review</NavLink>
        </nav>
    )
}