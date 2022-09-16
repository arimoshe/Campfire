import { useEffect, useRef, useState } from "react"
import logoIcon from './../../CampfireIcon.png'



function SpotSearchMap({ spots }) {

    const [map, setMap] = useState(null)
    const [markerList, setMarkerList] = useState([])
    const mapRef = useRef(null);
    // const [count, setCount] = useState(0);
    window.markerList = []
    useEffect(() => {
        // 
        const centerLat = (Math.max(...spots.map((spot) => spot.latitude)) + Math.min(...spots.map((spot) => spot.latitude))) / 2
        const centerLng = (Math.max(...spots.map((spot) => spot.longitude)) + Math.min(...spots.map((spot) => spot.longitude))) / 2
        if (mapRef.current && !map) {
           setMap(new window.google.maps.Map(mapRef.current, {
                center: { lat: centerLat, lng: centerLng },
                zoom:3,
                disableDefaultUI: true,
                zoomControl: true,
                gestureHandling: 'cooperative'
            }));

            return () => {

            }
        }

        const markerLatLngArr = new window.google.maps.LatLngBounds();

        
            if (markerList.length > 0) {
                console.log(markerList)
                markerList.forEach((marker) => {
                    marker.setMap(null)
                })
                
                // setMarkerList([])
            }
            
            
            setTimeout(()=>{
            spots.forEach((spot) => {
                setMarkerList(markerList.concat(new window.google.maps.Marker({
                position: { lat: spot.latitude, lng: spot.longitude },
                map: map,
                animation: window.google.maps.Animation.DROP,
                icon: {
                    url: logoIcon,
                    scaledSize: new window.google.maps.Size(30, 30),
                    origin: new window.google.maps.Point(0, 0)
                }
            }))
            )
            
            
            
            markerLatLngArr.extend(new window.google.maps.LatLng(spot.latitude, spot.longitude))
            map.fitBounds(markerLatLngArr)
        })
        },1000)   
    
    }, [map, spots])
    
   

    
    // const markerListTemp = []
    // if (count === 0 ) {
        
        // markerListTemp.push(
            
        // )
        // markerLatLngArr.extend(new window.google.maps.LatLng(spot.latitude, spot.longitude))


        
    // }
    // if (markerList.length === 0) { setMarkerList(markerListTemp) }
    // if (map) { map.fitBounds(markerLatLngArr) }

    // setCount(count + 1);
    return (
        <>
            <div className="SearchGoogleMap" ref={mapRef}>Map</div>
        </>
    )
}

export default SpotSearchMap