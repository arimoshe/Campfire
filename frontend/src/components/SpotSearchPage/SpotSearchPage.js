import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearSpotsStore, fetchSpots } from '../../store/spots';
import SpotSearchItem from './SpotSearchItem';
import SpotSearchMapWrapper from './SpotSearchMapWrapper';
import './SpotSearchPage.css'


function SpotSearchPage (props) {
    const history = useHistory()
    const [page, setPage] = useState(1);
    
    const [maxPage, setMaxPage] = useState(6)
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spots.allSpots)

    let params = new URLSearchParams(document.location.search);
    if (params.get("page") && page !== parseInt(params.get("page"))) { setPage(parseInt(params.get("page"))) }

    useEffect(()=>{
        let params = new URLSearchParams(document.location.search);
        if (params.get("page") && page !== parseInt(params.get("page"))) { setPage(parseInt(params.get("page"))) }
        dispatch(fetchSpots(page));
        if (spots) {
            console.log(Object.values(spots)[0].resultsCount)
            setMaxPage(Math.floor(Object.values(spots)[0].resultsCount/10))
        }

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
        return null;
    }
    return (

        <>
        <div className="SpotSearchOuterContainer">
            <div className="SpotSearchContainer">
                <div className="SpotsSearchItemsContainer">
                        <div className="spotsSearchItemsCounter">{`${1 + (10 * (page - 1))} - ${10 * page} of ${Object.values(spots)[0].resultsCount}`}</div>
                
                    <div>
                        <ul className="spotsSearchItems">
                            {Object.values(spots).map((spot)=>(<li key={spot.id}><SpotSearchItem spot={spot} /></li>))}
                        </ul>
                        <ul className="SearchNav">
                            {page > 1 ? <li onClick={handlePrev}>Prev</li> : null}
                            <li className="currentPage">{page}</li>
                            {(page + 1) <= maxPage ? <li>{page + 1} </li>: null}
                            {(page + 2) <= maxPage ? <li> {page + 2 }</li> : null}
                            {page < maxPage ? <li onClick={handleNext}>Next</li> : null}
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