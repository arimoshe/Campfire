import { useEffect, useRef, useState } from "react"

import logoIcon from './../../CampfireIcon.svg'

function SpotMap({spot}) {

    const [map, setMap] = useState(null)
    const mapRef = useRef(null)

    useEffect(()=>{
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, { 
                center: { lat: spot.latitude, lng: spot.longitude}, 
                zoom: 10,
                disableDefaultUI:true,
                zoomControl: true,
                gestureHandling: 'cooperative'
            }));
        }
    }, [mapRef, map, spot.latitude, spot.longitude])

    // const marker = 
    new window.google.maps.Marker({
        position: { lat: spot.latitude, lng: spot.longitude },
        map: map,
        icon: {
            url: logoIcon, 
            scaledSize: new window.google.maps.Size(70, 70),
            origin: new window.google.maps.Point(0,0)
        },
    });

    return (
        <>
        <div className="SpotLocationContainer">
            <h2 className="">Location</h2>
            <div className="googleMap" ref={mapRef} >Map</div>
                <p>{spot.city}, {spot.state}, United States</p>
        </div>
        </>
    )
}

export default SpotMap