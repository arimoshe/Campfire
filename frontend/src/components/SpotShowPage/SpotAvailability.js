import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { updateStoreFilter } from "../../store/filters";
import { toggleSpotDatesModal, toggleSpotGuestsModal } from "../../store/ui"
import SpotDateModal from "./SpotDateModal"
import SpotGuestsModal from "./SpotGuestsModal";


function SpotAvailability({ spot }) {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);
    const showSpotDatesModal = useSelector(state => state.ui.showSpotDatesModal);
    const showSpotGuestsModal = useSelector(state => state.ui.showSpotGuestsModal);
    const cookies = document.cookie.split('; ').reduce((prev, current) => { return { ...prev, [current.split('=')[0]]: decodeURIComponent(current.split('=')[1]) } }, {})
    const history = useHistory();

    useEffect(() => {
        if (cookies.booking) {
            if (JSON.parse(cookies.booking).startDate) {
                dispatch(updateStoreFilter({ startDate: new Date(JSON.parse(cookies.booking).startDate)}));
                dispatch(updateStoreFilter({ endDate: new Date(JSON.parse(cookies.booking).endDate) }));
            } 
            if (JSON.parse(cookies.booking).adults) {
                dispatch(updateStoreFilter({adults:JSON.parse(cookies.booking).adults }));
                dispatch(updateStoreFilter({children: JSON.parse(cookies.booking).children }));
            }
        }
    }, [cookies.booking, dispatch])

   

    const handleClick = (e) => {
        if (filters && filters.startDate && (filters.children + filters.adults) > 0) {
        e.preventDefault();

        const cookieObject = {
            children: filters.children,
            adults:filters.adults,
            startDate: filters.startDate,
            endDate: filters.endDate,
            spotId: spot.id,
            ownerId:spot.ownerId,
            price: (filters.endDate.getTime() - filters.startDate.getTime()+1) / (1000 * 3600 * 24) * spot.price,
            imageUrl: spot.photoUrls[0],
            siteName:spot.name,



        }

        document.cookie = `booking=${encodeURIComponent(JSON.stringify(cookieObject))}; path=/`

        
 
        
        history.push('/booking')

    }
    }


    if (!spot) return null

    return (
        <>
            <div></div>
            <div className="SpotAvailabilityContainer"  >
                <h2>Availability</h2>
                <div className="priceContainer">from <div>${spot.price}</div> / night</div>
                <div className="guestsContainer">for <span>{spot.capacity}</span> guests</div>
                <div className="SpotAvailabilitySelectorsContainer">
                    <div className="SpotDateSelectorContainer">
                        DATES
                        <button id="SpotDatesSelectorButton" onClick={() => (dispatch(toggleSpotDatesModal(true)))}><i className="fa-solid fa-calendar"></i>{filters && filters.startDate ? `${filters.startDate.toLocaleDateString()} - ${filters.endDate.toLocaleDateString() }` : 'Enter dates'}</button>
                        {showSpotDatesModal ? <SpotDateModal spot={spot} /> : null}
                    </div>
                    <div className="SpotGuestsSelectorContainer">
                        GUESTS
                        <button id="SpotGuestsSelectorButton" onClick={() => (dispatch(toggleSpotGuestsModal(true)))}><i className="fa-solid fa-user"></i>{filters && (filters.children + filters.adults) > 0 ? `${filters.children + filters.adults} ${filters.children + filters.adults === 1 ? 'Guest' : 'Guests' }`  : 'Add guests'}</button>
                        {showSpotGuestsModal ? <SpotGuestsModal spot={spot} /> : null}
                    </div>
                    <button onClick={handleClick} className="checkAvailibilityPill">{filters  && filters.startDate && filters.endDate && (filters.children + filters.adults) > 0 ? `Book Now` :`Check availability`}</button>
                </div>
            </div>
            
        </>
    )
}


export default SpotAvailability