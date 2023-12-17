import React from "react";
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <Link to="." className="site-logo">#vanlife</Link>
            <nav>
                <NavLink to="host">Host</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="vans">Vans</NavLink>
            </nav>
        </header>
    )
}