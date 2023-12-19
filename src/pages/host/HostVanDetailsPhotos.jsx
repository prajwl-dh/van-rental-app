import { useOutletContext } from "react-router-dom"

export default function HostVanDetailsPhotos(){
    const van = useOutletContext()
    return(
        <img className="host-van-detail-image" src={van.imageUrl} alt="{van.name}" />
    )
}