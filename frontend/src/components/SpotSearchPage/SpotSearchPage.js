import { useRef } from 'react';
import { useSelector } from 'react-redux';
import SpotSearchItemList from './SpotSearchItemList';
import SpotSearchMap from './SpotSearchMap';
import './SpotSearchPage.css'



function SpotSearchPage (props) {
    
    const pins = useRef({});
    const mapReference = useRef({})

    const spotsObj = useSelector(state => state.spots.allSpots)
    let spots;
    if (spotsObj) { spots = Object.values(spotsObj) }
    
  
    const toggle = (e) => {
        const listElement = document.getElementsByClassName('SpotsSearchItemsContainer')[0];
        const mapElement = document.getElementsByClassName('SpotsSearchMapContainer')[0];
        const listButton = document.getElementById('listButton')
        const mapButton = document.getElementById('mapButton')

        if (e.target.value === "list") {
            listElement.style.display="inherit";
            mapElement.style.display="none";
            listButton.style.fontWeight = "bold";
            listButton.style.background = "rgb(222, 222, 222)";
            mapButton.style.fontWeight = "initial";
            mapButton.style.background = "transparent"

        } else if (e.target.value === "map") {
            listElement.style.display = "none"
            mapElement.style.display = "inherit"
            mapButton.style.fontWeight = "bold"
            mapButton.style.background = "rgb(222, 222, 222)";
            listButton.style.fontWeight = "initial"
            listButton.style.background = "transparent"
            if (spots) {
                const bounds = new window.google.maps.LatLngBounds();
                spots.forEach((spot) => {
                    bounds.extend(new window.google.maps.LatLng(spot.latitude, spot.longitude));
                })
                mapReference.current.fitBounds(bounds)
            }
            
    }
    };
   
   
    

   

    

    
    return (

        <>
        <div className="SpotSearchOuterContainer">
            <div className="SpotSearchContainer">
                <SpotSearchItemList pins={pins} />
                <div className="SpotsSearchMapContainer">
                        <SpotSearchMap pins={pins} mapReference={mapReference} />
                </div>
            </div>
                <div id='mobileListMapSelector'><button id='listButton' value={"list"} onClick={toggle}>List</button><div className='dividePipe'></div><button id='mapButton' value={"map"} onClick={ toggle}>Map</button></div>
        </div>
        </>
    )
}

export default SpotSearchPage;