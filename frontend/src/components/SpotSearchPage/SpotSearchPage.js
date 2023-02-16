import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearSpotsStore, fetchSpots } from '../../store/spots';
import SpotSearchItem from './SpotSearchItem';
import SpotSearchItemList from './SpotSearchItemList';
import SpotSearchMap from './SpotSearchMap';
import SpotSearchMapWrapper from './SpotSearchMapWrapper';
import './SpotSearchPage.css'


function SpotSearchPage (props) {
    
    const pins = useRef({});
    
  
    const toggle = (e) => {
        const listElement = document.getElementsByClassName('SpotsSearchItemsContainer')[0];
        const mapElement = document.getElementsByClassName('SpotsSearchMapContainer')[0];
        const listButton = document.getElementById('listButton')
        const mapButton = document.getElementById('mapButton')
        console.log(e)

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
        }
    };
   
   
    

   

    

    
    return (

        <>
        <div className="SpotSearchOuterContainer">
            <div className="SpotSearchContainer">
                <SpotSearchItemList pins={pins} />
                <div className="SpotsSearchMapContainer">
                        <SpotSearchMap  pins={pins} />
                </div>
            </div>
                <div id='mobileListMapSelector'><button id='listButton' value={"list"} onClick={toggle}>List</button><div className='dividePipe'></div><button id='mapButton' value={"map"} onClick={ toggle}>Map</button></div>
        </div>
        </>
    )
}

export default SpotSearchPage;