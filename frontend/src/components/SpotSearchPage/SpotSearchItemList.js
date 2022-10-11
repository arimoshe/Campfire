import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { clearSpotsStore, fetchSpots } from "../../store/spots";
import SpotSearchItem from "./SpotSearchItem";


const SpotSearchItemList = ({pins}) => {

    const dispatch = useDispatch();
    const history = useHistory()
    const [page, setPage] = useState(1);
    const spots = useSelector(state => state.spots.allSpots);
    const filterObj = useSelector(state => state.filters);
    const [maxPage, setMaxPage] = useState(6);
    const totalSpotsFound = useSelector(state => state.spots.resultsCount)

    let params = new URLSearchParams(document.location.search);
    if (params.get("page") && page !== parseInt(params.get("page"))) { setPage(parseInt(params.get("page"))) }

    useEffect(() => {
        let params = new URLSearchParams(document.location.search);
        if (params.get("page") && page !== parseInt(params.get("page"))) { setPage(parseInt(params.get("page"))) }
        dispatch(fetchSpots(page, filterObj))

        return (
            () => dispatch(clearSpotsStore())
        )
    }, [document.location.search])



    const handlePrev = () => {
        setPage(page - 1);
        history.push(`/search?page=${page - 1}`)
    }
    const handleNext = () => {
        setPage(page + 1)

        history.push(`/search?page=${page + 1}`)
    }

    if (!spots && !totalSpotsFound) {
        

       return <div className='spotsSearchNothingFound'>No camping spots were found near this location. Here are some suggestions: San Francisco, Florida, Crater Lake...</div>

        
        
    } else if (!spots && totalSpotsFound) {
       return  <div className='spotsSearchNothingFound'>Loading</div>
    }

    return (
        <>
            <div className="SpotsSearchItemsContainer">
                <div className="spotsSearchItemsCounter">{`${1 + (10 * (page - 1))} - ${((10 * page) - totalSpotsFound) < 10 ? totalSpotsFound : 10 * page} of ${totalSpotsFound}`}</div>

                <div>
                    <ul className="spotsSearchItems">
                        {spots ? Object.values(spots).map((spot) => (<li key={spot.id}><SpotSearchItem spot={spot} pins={pins} /></li>)) : null}
                    </ul>
                    <ul className="SearchNav">
                        {page > 1 ? <li onClick={handlePrev}>Prev</li> : null}
                        {page >= 3 ? <li><Link to={`/search?page=${page - 2}`} >{page - 2}</Link></li> : null}
                        {page >= 2 ? <li><Link to={`/search?page=${page - 1}`} >{page - 1}</Link></li> : null}
                        <li className="currentPage">{page}</li>
                        {(page + 1) <= Math.ceil(totalSpotsFound / 10) ? <li><Link to={`/search?page=${page + 1}`} >{page + 1}</Link></li> : null}
                        {(page + 2) <= Math.ceil(totalSpotsFound / 10) ? <li><Link to={`/search?page=${page + 2}`} >{page + 2}</Link></li> : null}
                        {page < Math.ceil(totalSpotsFound / 10) ? <li onClick={handleNext}>Next</li> : null}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SpotSearchItemList;