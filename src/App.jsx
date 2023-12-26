import React from "react";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import "./server"
import Layout from "../src/components/Layout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans, { loader as vansLoader } from "./pages/vans/Vans.jsx"
import VansDetail, { loader as vansDetailLoader } from "./pages/vans/VansDetail.jsx"
import HostLayout, { loader as hostLayoutLoader } from "../src/components/HostLayout.jsx"
import HostDashboard, { loader as hostDashboardLoader } from "./pages/host/HostDashboard.jsx"
import HostIncome, { loader as hostIncomeLoader } from "./pages/host/HostIncome.jsx"
import HostReview, { loader as hostReviewLoader} from "./pages/host/HostReview.jsx"
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans.jsx"
import HostVansDetails, { loader as hostVanDetailsLoader } from "./pages/host/HostVanDetails.jsx"
import HostVansDetailsInfo, { loader as hostVansDetailsInfoLoader} from "./pages/host/HostVanDetailsInfo.jsx"
import HostVansDetailsPhotos, { loader as hostVanDetailsPhotosLoader} from "./pages/host/HostVanDetailsPhotos.jsx"
import HostVansDetailsPricing, { loader as hostVansDetailsPricingLoader} from "./pages/host/HostVanDetailsPricing.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import ErrorComponent from "./components/ErrorComponent.jsx"
import Login from "./pages/Login.jsx"

export default function App(){
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vans" element={<Vans />} loader={vansLoader} errorElement={<ErrorComponent />} />
            <Route path="/vans/:id" element={<VansDetail />} loader={vansDetailLoader} errorElement={<ErrorComponent />}/>

            <Route path="/host" element={<HostLayout />} loader={hostLayoutLoader}>
                <Route index element={<HostDashboard />} loader={hostDashboardLoader}/>
                <Route path="income" element={<HostIncome />} loader={hostIncomeLoader} />
                <Route path="review" element={<HostReview />} loader={hostReviewLoader} />
                <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<ErrorComponent />}/>

                <Route path="vans/:id" element={<HostVansDetails />} loader={hostVanDetailsLoader} errorElement={<ErrorComponent />}>
                    <Route index element={<HostVansDetailsInfo />} loader={hostVansDetailsInfoLoader} />
                    <Route path="pricing" element={<HostVansDetailsPricing />} loader={hostVansDetailsPricingLoader} />
                    <Route path="photos" element={<HostVansDetailsPhotos />} loader={hostVanDetailsPhotosLoader} />
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