import React from "react";

export default function HostVans(){
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        async function fetchHostVans(){
            const response = await fetch('/api/host/vans')
            const data = await response.json()
            setVans((prev) => {
                return data.vans
            })
        }
        fetchHostVans()
    },[])
    
    return(
        <div>
            <h1>Host Vans Goes Here</h1>
        </div>
    )
}