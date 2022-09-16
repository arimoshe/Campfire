import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpots } from '../../store/spots';
import SpotSearchItem from './SpotSearchItem';
import SpotSearchMapWrapper from './SpotSearchMapWrapper';
import './SpotSearchPage.css'

function SpotSearchPage () {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchSpots());
    }, [dispatch])

    const spots = useSelector(state => state.spots.allSpots)



    if (!spots) {
        return null;
    }

    return (

        <>
        <div className="SpotSearchOuterContainer">
            <div className='SpotSearchContainer'>
                <div className='SpotsSearchItemsContainer'>
                    <div className='spotsSearchItemsCounter'></div>
                </div>
                <ul className='spotsSearchItems'>
                     {Object.values(spots).map((spot)=>(<li key={spot.id}><SpotSearchItem spot={spot} /></li>))}
                </ul>
                <div className='SpotsSearchMapContainer'>
                    <SpotSearchMapWrapper apiKey={process.env.REACT_APP_MAPS_API_KEY} spots={Object.values(spots)} />
                </div>
            </div>
        </div>
        </>
    )
}

export default SpotSearchPage;