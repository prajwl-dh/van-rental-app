import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import "./server"
import Layout from "../src/components/Layout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/vans/Vans.jsx"
import VansDetail from "./pages/vans/VansDetail.jsx"
import HostLayout from "../src/components/HostLayout.jsx"

export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/host" element={<></>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/vans" element={<Vans />} />
                        <Route path="/vans/:id" element={<VansDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}