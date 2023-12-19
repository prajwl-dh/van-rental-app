import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import "./server"
import Layout from "../src/components/Layout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/vans/Vans.jsx"
import VansDetail from "./pages/vans/VansDetail.jsx"
import HostLayout from "../src/components/HostLayout.jsx"
import HostDashboard from "./pages/host/HostDashboard.jsx"
import HostIncome from "./pages/host/HostIncome.jsx"
import HostReview from "./pages/host/HostReview.jsx"
import HostVans from "./pages/host/HostVans.jsx"
import HostVansDetails from "./pages/host/HostsVanDetails.jsx"

export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/vans" element={<Vans />} />
                        <Route path="/vans/:id" element={<VansDetail />} />

                        <Route path="/host" element={<HostLayout />}>
                            <Route index element={<HostDashboard />}/>
                            <Route path="income" element={<HostIncome />} />
                            <Route path="review" element={<HostReview />} />
                            <Route path="vans" element={<HostVans />} />
                            <Route path="vans/:id" element={<HostVansDetails />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}