import React from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

export default function Layout(){
    return(
        <div className="site-wrapper">
            <Header />
            <main>
                Main Content Goes Here
            </main>
            <Footer />
        </div>
    )
}