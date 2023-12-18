import React from "react";
import HostHeader from "./HostHeader.jsx"
import { Outlet } from "react-router-dom";

export default function HostLayout(){
    return(
        <div>
            <HostHeader />
            <Outlet />
        </div>
    )
}