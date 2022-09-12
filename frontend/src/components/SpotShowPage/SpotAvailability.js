import { useDispatch, useSelector } from "react-redux"
import { toggleSpotDatesModal, toggleSpotGuestsModal } from "../../store/ui"
import SpotDateModal from "./SpotDateModal"
import SpotGuestsModal from "./SpotGuestsModal";


function SpotAvailability({ spot }) {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);
    const showSpotDatesModal = useSelector(state => state.ui.showSpotDatesModal);
    const showSpotGuestsModal = useSelector(state => state.ui.showSpotGuestsModal);
    const guests = filters.guests

   
    if (!spot || !guests) return null

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
                        <button id="SpotGuestsSelectorButton" onClick={() => (dispatch(toggleSpotGuestsModal(true)))}><i className="fa-solid fa-calendar"></i>{guests && (guests.children + guests.adults) > 0 ? `${guests.children + guests.adults} guests`  : 'Add guests'}</button>
                        {showSpotGuestsModal ? <SpotGuestsModal spot={spot} /> : null}
                    </div>
                    <button className="checkAvailibilityPill">Check availability</button>
                </div>
            </div>
            
        </>
    )
}


export default SpotAvailability