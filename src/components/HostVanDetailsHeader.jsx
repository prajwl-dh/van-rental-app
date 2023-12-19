import { NavLink } from "react-router-dom";

export default function HostVanDetailsHeader(){
    const activeStyle = {
        textDecoration : "underline",
        fontWeight : "bold",
        color : "#161616"
    }
    return(
        <nav className="host-van-detail-nav">
            <NavLink end to="" style={({isActive}) => isActive?activeStyle : null}>Details</NavLink>
            <NavLink to="pricing" style={({isActive}) => isActive?activeStyle : null}>Pricing</NavLink>
            <NavLink to="photos" style={({isActive}) => isActive?activeStyle : null}>Photos</NavLink>
        </nav>
    )
}