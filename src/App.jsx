import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import "./server"
import Layout from "../src/components/Layout.jsx"

export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/host" element={<></>} />
                    <Route path="/about" element={<></>} />
                    <Route path="/vans" element={<></>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}