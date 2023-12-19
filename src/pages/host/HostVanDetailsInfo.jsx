import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDetailsInfo(){
    const van = useOutletContext()
    console.log(van)
    return(
        <section className="host-van-detail-info">
            <h4>Name: <span>{van.name}</span></h4>
            <h4>Category: <span>{van.type}</span></h4>
            <h4>Description: <span>{van.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}