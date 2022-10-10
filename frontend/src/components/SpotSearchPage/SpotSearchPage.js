import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearSpotsStore, fetchSpots } from '../../store/spots';
import SpotSearchItem from './SpotSearchItem';
import SpotSearchMap from './SpotSearchMap';
import SpotSearchMapWrapper from './SpotSearchMapWrapper';
import './SpotSearchPage.css'


function SpotSearchPage (props) {
    const history = useHistory()
    const [page, setPage] = useState(1);
    
    const filterObj = useSelector(state => state.filters)
    const [maxPage, setMaxPage] = useState(6)
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spots.allSpots)
    const totalSpotsFound = useSelector(state => state.spots.resultsCount)

    let params = new URLSearchParams(document.location.search);
    if (params.get("page") && page !== parseInt(params.get("page"))) { setPage(parseInt(params.get("page"))) }

    useEffect(()=>{
        let params = new URLSearchParams(document.location.search);
        if (params.get("page") && page !== parseInt(params.get("page"))) { setPage(parseInt(params.get("page"))) }
        dispatch(fetchSpots(page, filterObj))

        return(
            ()=>dispatch(clearSpotsStore())
        )
    }, [document.location.search])
    
    

    const handlePrev = () => {
        setPage(page - 1);
        history.push(`/search?page=${page-1}`)
    }
    const handleNext = () => {
        setPage(page + 1)
        
        history.push(`/search?page=${page+1}`)
    }

    

    if (!spots) {
        if (totalSpotsFound) {
            return (
                <>
                    <div className="SpotSearchOuterContainer">
                        <div className="SpotSearchContainer">
                            <div className="SpotsSearchItemsContainer">

                                <div className='spotsSearchNothingFound'>No camping spots were found near this location. Here are some suggestions: San Francisco, Florida, Crater Lake...</div>

                            </div>
                            <div className="SpotsSearchMapContainer">
                                <SpotSearchMap spots={[]} />
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return null
        }
        
    }
    return (

        <>
        <div className="SpotSearchOuterContainer">
            <div className="SpotSearchContainer">
                <div className="SpotsSearchItemsContainer">
                        <div className="spotsSearchItemsCounter">{`${1 + (10 * (page - 1))} - ${((10 * page) - totalSpotsFound) < 10 ? totalSpotsFound : 10 * page } of ${totalSpotsFound}`}</div>
                
                    <div>
                        <ul className="spotsSearchItems">
                            {spots ? Object.values(spots).map((spot)=>(<li key={spot.id}><SpotSearchItem spot={spot} /></li>)) :"no spots found" }
                        </ul>
                        <ul className="SearchNav">
                            {page > 1 ? <li onClick={handlePrev}>Prev</li> : null}
                                {page >= 3 ? <li>{page - 2} </li> : null}
                                {page  >= 2 ? <li> {page - 1}</li> : null}
                            <li className="currentPage">{page}</li>
                                {(page + 1) <= Math.ceil(totalSpotsFound / 10) ? <li>{page + 1} </li>: null}
                                {(page + 2) <= Math.ceil(totalSpotsFound / 10) ? <li> {page + 2 }</li> : null}
                                {page < Math.ceil(totalSpotsFound / 10) ? <li onClick={handleNext}>Next</li> : null}
                        </ul>
                    </div>
                </div>
                <div className="SpotsSearchMapContainer">
                    <SpotSearchMapWrapper apiKey={process.env.REACT_APP_MAPS_API_KEY} spots={Object.values(spots)} />
                </div>
            </div>
        </div>
        </>
    )
}

export default SpotSearchPage;