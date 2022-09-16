import { useEffect, useRef, useState } from "react"
import logoIcon from './../../CampfireIcon.svg'
import SpotSearchItem from "./SpotSearchItem"



function SpotSearchMap({ spots }) {

    const [map, setMap] = useState(null)
    const mapRef = useRef(null)


    useEffect(() => {
        const centerLat = (Math.max(...spots.map((spot) => spot.latitude)) + Math.min(...spots.map((spot) => spot.latitude))) / 2
        const centerLng = (Math.max(...spots.map((spot) => spot.longitude)) + Math.min(...spots.map((spot) => spot.longitude))) / 2
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, {
                center: { lat: centerLat, lng: centerLng },
                zoom: 7,
                disableDefaultUI: true,
                zoomControl: true,
                gestureHandling: 'cooperative'
            }));
        }
    }, [mapRef, map])


    const markerListenerArr = [];

    spots.forEach((spot) => {
       let marker = new window.google.maps.Marker({
            position: { lat: spot.latitude, lng: spot.longitude },
            map: map,
            animation: window.google.maps.Animation.DROP,
            icon: {
                url: logoIcon,
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0,0)
            },
        })
    // markerListenerArr.push(marker.addListener('mouseover', ()=> {
    //     let infoWindow = new window.google.maps.InfoWindow({
    //         content: `<div className="SpotSearchItemContainer">
    //             <div className="SpotsSearchItemImgContainer">
    //                 <div className="spotsSearchWidget"></div>
    //                 <div className="SpotsSearchItemImg"><img src=${spot.photoUrls} alt="Campsite" /></div>
    //             </div>
    //             <ul className="spotsSearchDescriptionItems">
    //                 <li className="spotsSearchDescriptionReviews"></li>
    //                 <li className="SpotName">${spot.name}</li>
    //                 <li className="spotsSearchDescriptionTypes">
    //                     Up to ${spot.capacity} Guests • ${spot.lodging > 0 ? <>Lodging<span>, </span></> : null}${spot.rvs > 0 ? <>RVs<span>, </span></> : null}${spot.tents > 0 ? <>Tents<span>, </span></> : null}
                        
    //                 </li>
    //                 <li>${ spot.acres } acres • ${ spot.city }, ${ spot.state } </li>
    //                 <li>from <span>${spot.price} per night</span></li>
    //             </ul>
    //         </div>`
    //     })})
    //      infoWindow.open(map, marker)
    //     )
       
    //     marker.addListener("mouseout", function () {
    //         infowindow.close();
    //     });


    }) 
    return (
        <>
            <div className="SearchGoogleMap" ref={mapRef}>Map</div>
        </>
    )
}

export default SpotSearchMap