import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toggleSpowShowModal } from "../../store/ui"
import SpotDateModal from "./SpotDateModal"


function SpotAvailability({ spot }) {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters)
    const showModal = useSelector(state => state.ui.showShowModal)

    const dateRef = useRef(null)

   
    if (!spot) return null

    return (
        <>
            <div></div>
            <div className="SpotAvailabilityContainer"  >
            Availability
                <div className="SpotAvailabilitySelectorsContainer">
                    <div className="SpotDateSelectorContainer">
                        DATES
                        <button id="SpotDatesSelectorButton" ref={dateRef} onClick={() => (dispatch(toggleSpowShowModal(true)))}><i class="fa-solid fa-calendar"></i>{filters && filters.startDate ? `${filters.startDate.toLocaleDateString()} - ${filters.endDate.toLocaleDateString() }` : 'Enter dates'}</button>
                        {showModal ? <SpotDateModal spot={spot} /> : null}
                    </div>
                    <div className="SpotGuestsSelectorContainer">
                        GUESTS
                        <button id="SpotGuestsSelectorButton"><i class="fa-solid fa-calendar"></i>{'Add guests'}</button>
                        
                    </div>
                    <button className="checkAvailibilityPill">Check availability</button>
                </div>
            </div>
            
        </>
    )
}


export default SpotAvailability