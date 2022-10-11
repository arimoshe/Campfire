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
    
    
   
   
    

   

    

    
    return (

        <>
        <div className="SpotSearchOuterContainer">
            <div className="SpotSearchContainer">
                <SpotSearchItemList pins={pins} />
                <div className="SpotsSearchMapContainer">
                        <SpotSearchMap  pins={pins} />
                </div>
            </div>
        </div>
        </>
    )
}

export default SpotSearchPage;