import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import "./server"
import Layout from "../src/components/Layout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"

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
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}