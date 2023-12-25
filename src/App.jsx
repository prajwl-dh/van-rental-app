import React from "react";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import "./server"
import Layout from "../src/components/Layout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans, { loader as vansLoader } from "./pages/vans/Vans.jsx"
import VansDetail, { loader as vansDetailLoader } from "./pages/vans/VansDetail.jsx"
import HostLayout from "../src/components/HostLayout.jsx"
import HostDashboard from "./pages/host/HostDashboard.jsx"
import HostIncome from "./pages/host/HostIncome.jsx"
import HostReview from "./pages/host/HostReview.jsx"
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans.jsx"
import HostVansDetails, { loader as hostVanDetailsLoader } from "./pages/host/HostVanDetails.jsx"
import HostVansDetailsInfo from "./pages/host/HostVanDetailsInfo.jsx"
import HostVansDetailsPhotos from "./pages/host/HostVanDetailsPhotos.jsx"
import HostVansDetailsPricing from "./pages/host/HostVanDetailsPricing.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import ErrorComponent from "./components/ErrorComponent.jsx"

export default function App(){
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} loader={vansLoader} errorElement={<ErrorComponent />} />
            <Route path="/vans/:id" element={<VansDetail />} loader={vansDetailLoader} errorElement={<ErrorComponent />}/>

            <Route path="/host" element={<HostLayout />}>
                <Route index element={<HostDashboard />}/>
                <Route path="income" element={<HostIncome />} />
                <Route path="review" element={<HostReview />} />
                <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<ErrorComponent />}/>

                <Route path="vans/:id" element={<HostVansDetails />} loader={hostVanDetailsLoader} errorElement={<ErrorComponent />}>
                    <Route index element={<HostVansDetailsInfo />} />
                    <Route path="pricing" element={<HostVansDetailsPricing />} />
                    <Route path="photos" element={<HostVansDetailsPhotos />} />
                </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Route>
    ))
    return(
        <div>
            <RouterProvider router={router} />
        </div>
    )
}