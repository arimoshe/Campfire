import { useEffect, useRef, useState } from "react"
import {  useSelector } from "react-redux"
import logoIcon from './../../CampfireIconBorderShadow.svg'



function SpotSearchMap({ pins, mapReference }) {
    
    const [map, setMap] = useState(null)
    const spotsObj = useSelector(state => state.spots.allSpots)
    
    

    let spots;
    if (spotsObj) { spots = Object.values(spotsObj)}

    

    const mapRef = useRef(null);
    useEffect(() => {
        

        Object.values(pins.current).forEach((pin) => {
            pin.setMap(null)
        })
        pins.current = {}
        if (spots && spots.length > 1 && window.google) {
            const centerLat = (Math.max(...spots.map((spot) => spot.latitude)) + Math.min(...spots.map((spot) => spot.latitude))) / 2
            const centerLng = (Math.max(...spots.map((spot) => spot.longitude)) + Math.min(...spots.map((spot) => spot.longitude))) / 2
            let googleMap;
            console.log(map)
            if (mapRef.current && !map) {
            googleMap = new window.google.maps.Map(mapRef.current, {
                    center: { lat: centerLat, lng: centerLng },
                    zoom:3,
                    disableDefaultUI: true,
                    zoomControl: true,
                    gestureHandling: 'cooperative'
                });
            setMap(googleMap)
            }
           
           
            
            const bounds = new window.google.maps.LatLngBounds();
            
            
            spots.forEach((spot) => {
                let marker;
                marker = new window.google.maps.Marker({
                position: { lat: spot.latitude, lng: spot.longitude },
                map: googleMap || map,
                animation: window.google.maps.Animation.DROP,
                icon: {
                    url: logoIcon,
                    scaledSize: new window.google.maps.Size(40, 40),
                    anchor: new window.google.maps.Point(20, 40)
                    }
                })
                pins.current[spot.id] = marker;

                const handleHover = () => {
                    Array.from(document.getElementsByClassName('SpotSearchItemContainer')).map((element) => element.classList.remove("active"))
                    const domElement = document.getElementById("spot" + spot.id)
                    domElement.classList.add("active");
                    domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                marker.addListener("mouseover", handleHover );
                bounds.extend(new window.google.maps.LatLng(spot.latitude, spot.longitude));
                googleMap ?  googleMap.fitBounds(bounds) : map.fitBounds(bounds)

            })
            
        
        } else {
            const centerLat = 39.35946822011334;
            const centerLng = -99.40333457735373;
            if (mapRef.current && !map && window.google) {
                let googleMap = new window.google.maps.Map(mapRef.current, {
                    center: { lat: centerLat, lng: centerLng },
                    zoom: 3,
                    disableDefaultUI: true,
                    zoomControl: true,
                    gestureHandling: 'cooperative'
                })
                setMap(googleMap);
                
                    
                
                return () => {

                }
            }
        } 
        
    }, [window.google])
    
   
    useEffect(() => {
        Object.values(pins.current).forEach((pin) => {
            pin.setMap(null)
        })
        pins.current = {}
        if (map && spots) {
            mapReference.current = map
            const bounds = new window.google.maps.LatLngBounds();


            spots.forEach((spot) => {
                let marker;
                marker = new window.google.maps.Marker({
                    position: { lat: spot.latitude, lng: spot.longitude },
                    map: map,
                    animation: window.google.maps.Animation.DROP,
                    icon: {
                        url: logoIcon,
                        scaledSize: new window.google.maps.Size(40, 40),
                        anchor: new window.google.maps.Point(20, 40)
                    }
                })
                pins.current[spot.id] = marker;
                let markerListeners;
                const handleHoverClick = (e) => {
                    if (window.getComputedStyle(document.getElementById("mobileListMapSelector")).display !== "none") {
                        const listElement = document.getElementsByClassName('SpotsSearchItemsContainer')[0];
                        const mapElement = document.getElementsByClassName('SpotsSearchMapContainer')[0];
                        const listButton = document.getElementById('listButton')
                        const mapButton = document.getElementById('mapButton')
                        listElement.style.display = "inherit";
                        mapElement.style.display = "none";
                        listButton.style.fontWeight = "bold";
                        listButton.style.background = "rgb(222, 222, 222)";
                        mapButton.style.fontWeight = "initial";
                        mapButton.style.background = "transparent"
                    }
                    Array.from(document.getElementsByClassName('SpotSearchItemContainer')).map((element) => element.classList.remove("active"))
                    const domElement = document.getElementById("spot" + spot.id)
                    domElement.classList.add("active");
                    domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                marker.addListener("mouseover", handleHoverClick);
                marker.addListener("click", handleHoverClick)
                bounds.extend(new window.google.maps.LatLng(spot.latitude, spot.longitude));
                map.fitBounds(bounds)
            })
        }
    },[spots])
    

    return (
        <>
            <div className="SearchGoogleMap" ref={mapRef}>Map</div>
        </>
    )
}

export default SpotSearchMap